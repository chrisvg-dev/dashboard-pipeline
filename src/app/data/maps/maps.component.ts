import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  public url: string = 'http://localhost:8080/api/pipeline';
  public mapsUrl: string = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=';
  public apiMaps: string = 'AIzaSyC8osopMqqqbMP_IVRtRGBtpiB6N5S_XvI';
  public data: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.buscarEnMaps();
  }

  public buscarEnMaps(): void {
    this.http.get( this.url ).subscribe(
      data => {
        this.data = data;
        console.log(this.data);
      },
      err => {}
    );
  }

  public solicitarRecursos(): void {
    this.http.get( this.url+"/recolectar" ).subscribe(
      data => {
        if (data === true) {
          this.buscarEnMaps();
        }
      },
      err => {  
        alert(err);
      }
    );
  }

  public procesar(): void {
    this.data.forEach(item => {
      this.consultarAlcaldia(item.id, item.ubicacion);
    });
  }

  public consultarAlcaldia(id: number, coord: string): any {
    this.http.get(this.mapsUrl+coord+'&key='+this.apiMaps).subscribe(
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
    this.http.put(this.url, {
      idVehiculo,
      alcaldia
    }).subscribe(
      resp=> { 
        this.buscarEnMaps();
      },
      err => {}
    );
  }

}
