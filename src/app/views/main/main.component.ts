import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PipelineService } from 'src/app/services/pipeline-service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public tableData: any = [];
  public isTableVisible: boolean = true;

  public data: any = [];
  public isDataVisible: boolean = false;

  public alcaldias: any = [];
  public areAlcaldiasVisible: boolean = false;
  
  public position = {
    lat: 19.45009994506836,
    lng: -99.11009979248048
  };

  constructor(
    private http: HttpClient, 
    private vService: PipelineService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.buscarTodos();
  }

  public buscarTodos(): void {
    this.vService.obtenerTodos().subscribe(
      resp => { 
        this.tableData = resp.data.records;
        this.isTableVisible = true; 
        this.isDataVisible = false; 
        this.areAlcaldiasVisible = false;
      },
      error => {
        this.toastr.error("No hay datos", "Error");
      }
    );
  }

  public filter(value: string): void {
    let filtro = value.split("=");
    switch(filtro[0]) {
      case '*': console.log('Data filter')
        this.buscarTodos();
        break;
      case 'alcaldia': 
        console.log('Alcaldia filter'); 
        this.vService.unidadesPorAlcaldia(filtro[1]).subscribe(
          resp => { 
            console.log(resp);
            this.tableData = resp.data.buscarPorAlcaldia; 
            this.isTableVisible = true; 
            this.isDataVisible = false; 
            this.areAlcaldiasVisible = false;
          }
        );
        break;
      case 'udisponibles': 
        console.log('Vehicles available filter'); 
        this.vService.unidadesDisponibles().subscribe(
          resp => { 
            this.tableData = resp.data.unidadesDisponibles; 
            this.isTableVisible = true; 
            this.isDataVisible = false; 
            this.areAlcaldiasVisible = false;
          }
        );
        break;
      case 'alcaldias': 
        console.log('Todas las alcaldias'); 
        this.vService.obtenerAlcaldias().subscribe(
          resp => { 
            this.alcaldias = resp.data.alcaldiasDisponibles;
            console.log(this.alcaldias); 
            this.isTableVisible = false; 
            this.isDataVisible = false; 
            this.areAlcaldiasVisible = true;
          }
        );
        break;
      case 'id': 
        console.log('Vehicles available filter'); 
        this.vService.vehicleById(parseInt(filtro[1])).subscribe(
          resp => { 
            console.log(resp === null)
            if (resp !== null) {
              
              this.data = resp.data.buscarPorId;
              console.log(this.data);

              this.tableData = [];
              this.isTableVisible = false;
              this.isDataVisible = true;
              this.areAlcaldiasVisible = false;

              this.position = { lat: this.data.latitud, lng: this.data.longitud };

              console.log(this.position)

            } else {
              this.toastr.warning('Su búsqueda no obtuvo resultados', 'Advertencia');
            }
          },
          err => {
            console.log(err === null)
            if (err.status) this.toastr.error('Su búsqueda no obtuvo resultados. La sintaxis debe ser la siguiente -> id=number', 'Error');
          }
        );
        break;
      default: this.toastr.info('El filtro utilizado no es válido!!!', 'Aviso'); break;
    }
  }

}
