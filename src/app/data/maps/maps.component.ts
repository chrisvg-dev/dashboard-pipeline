import { Component, OnInit } from '@angular/core';
import { StreamService } from 'src/app/services/stream.service';
import { PipelineService } from 'src/app/services/pipeline-service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  public data: any = [];

  constructor(
    private dataService: PipelineService,
    private stream: StreamService) { }

  ngOnInit(): void {
    this.buscarDatos();
  }

  public buscarDatos(): void {
    this.dataService.obtenerTodos().subscribe(
      resp => {
        this.data = resp.data.records;
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
}
