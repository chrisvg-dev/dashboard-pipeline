import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

/**
 * Declaración de los servicios que se conectan a la API.
 */
@Injectable({
  providedIn: 'root'
})
export class PipelineService {
  private URL: string = environment.URL_SERVICE + "api/graph";

  constructor(private http: HttpClient) { }

  public obtenerTodos() : Observable<any> {
    const query = '{ records{ idVehiculo statusVehiculo longitud latitud alcaldia { name } } }';
    return this.http.post(this.URL, query);
  }
  public obtenerAlcaldias() : Observable<any> {
    const query = '{ alcaldiasDisponibles { name } }';
    return this.http.post(this.URL, query);
  }
  public unidadesDisponibles() : Observable<any> {
    const query = '{ unidadesDisponibles { idVehiculo statusVehiculo longitud latitud alcaldia { name } } }';
    return this.http.post(this.URL, query);
  }
  public vehiculoPorId(id: number) : Observable<any> {
    const query = `{ buscarPorId(idVehiculo:${id}) { idVehiculo statusVehiculo longitud latitud alcaldia { name } } }`;
    return this.http.post(this.URL, query);
  }
  public unidadesPorAlcaldia(alcaldia: string) : Observable<any> {
    const query = `{ buscarPorAlcaldia(alcaldia:"${alcaldia}") { idVehiculo statusVehiculo longitud latitud alcaldia { name } } }`;
    return this.http.post(this.URL, query);
  }
}
