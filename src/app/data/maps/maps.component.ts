import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GoogleService } from 'src/app/services/google.service';
import { StreamService } from 'src/app/services/stream.service';
import { PipelineService } from 'src/app/services/pipeline-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  public url: string = environment.URL_JAVA;
  public data: any = [];

  constructor(
    private http: HttpClient, 
    private dataService: PipelineService,
    private stream: StreamService,
    private google: GoogleService) { }

  ngOnInit(): void {
    this.buscarDatos();
  }

  public buscarDatos(): void {
    this.dataService.obtenerTodos().subscribe(
      data => {
        this.data = data;
        console.log(this.data);
      },
      err => { alert(this.data); }
    );
  }

  public solicitarRecursos(): void {
    this.stream.stream().subscribe(
      data => {
        if (data === true) {
          this.buscarDatos();
        }
      },
      err => {  
        alert(err);
      }
    );
  }

  public procesar(): void {
    this.data.forEach(item => {
      this.consultarAlcaldia(item.id, `${item.latitud},${item.longitud}` );
    });
  }

  public consultarAlcaldia(id: number, coord: string): any {
    this.google.buscarAlcaldia( coord ).subscribe(
      resp=> { 
        const data = resp as any;
        const len = data.results.length;        
        const alcaldia = data.results[len - 4].address_components[0].long_name;
        this.agregarAlcaldia(id, alcaldia);
      },
      err => {
        return null;
      }
    );
  }

  public agregarAlcaldia(idVehiculo: number, alcaldia: string): void {
    this.dataService.agregarAlcaldia(idVehiculo, alcaldia).subscribe(
      resp=> { 
        this.buscarDatos();
      },
      err => {}
    );
  }

}
