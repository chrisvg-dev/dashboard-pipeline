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
    return this.http.get(this.URL + "/all");
  }
  public obtenerAlcaldias() : Observable<any> {
    return this.http.get(this.URL + "/alcaldiasDisponibles");
  }
  public unidadesDisponibles() : Observable<any> {
    return this.http.get(this.URL + "/unidadesDisponibles");
  }
  public vehiculoPorId(id: number) : Observable<any> {
    return this.http.get(this.URL + "/vehiculos/" + id);
  }
  public unidadesPorAlcaldia(alcaldia: string) : Observable<any> {
    return this.http.get(this.URL + "/alcaldias/" + alcaldia);
  }
}
