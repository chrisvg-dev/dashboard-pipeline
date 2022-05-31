import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GoogleService } from 'src/app/services/google.service';
import { StreamService } from 'src/app/services/stream.service';
import { PipelineService } from 'src/app/services/pipeline-service';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

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
    private google: GoogleService,
    private toast: ToastrService) { }

  ngOnInit(): void {
    this.buscarDatos();
  }

  public buscarDatos(): void {
    this.dataService.obtenerTodos().subscribe(
      resp => {
        console.log(resp);
        this.data = resp.data.records;
      },
      err => { alert(this.data); }
    );
  }

  public solicitarRecursos(): void {
    this.stream.stream().subscribe(
      data => {
        setTimeout(() => { 
          this.toast.info("Los datos se han cargado", "Información");
            if (data === true) {          
              this.buscarDatos();
            } 
          }, 
          2000
        )
      },
      err => {  
        alert(err);
      }
    );
  }
}
