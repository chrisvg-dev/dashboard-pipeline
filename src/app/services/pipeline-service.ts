import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PipelineService {
  private URL: string = environment.URL_JAVA;
  private UR_GRAPHL: string = environment.URL_JAVA_GRAPH;

  constructor(private http: HttpClient) { }

  public obtenerTodos() : Observable<any> {
    const query = '{ records{ idVehiculo statusVehiculo longitud latitud alcaldia { name } } }';
    return this.http.post(this.UR_GRAPHL, query);
  }
  public obtenerAlcaldias() : Observable<any> {
    const query = '{ alcaldiasDisponibles { name } }';
    return this.http.post(this.UR_GRAPHL, query);
  }
  public unidadesDisponibles() : Observable<any> {
    const query = '{ unidadesDisponibles { idVehiculo statusVehiculo longitud latitud alcaldia { name } } }';
    return this.http.post(this.UR_GRAPHL, query);
  }
  public vehicleById(id: number) : Observable<any> {
    const query = `{ buscarPorId(idVehiculo:${id}) { idVehiculo statusVehiculo longitud latitud alcaldia { name } } }`;
    return this.http.post(this.UR_GRAPHL, query);
  }
  public unidadesPorAlcaldia(alcaldia: string) : Observable<any> {
    const query = `{ buscarPorAlcaldia(alcaldia:"${alcaldia}") { idVehiculo statusVehiculo longitud latitud alcaldia { name } } }`;
    return this.http.post(this.UR_GRAPHL, query);
  }
}
