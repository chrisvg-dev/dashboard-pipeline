import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleServiceService {
  private URL: string = 'http://localhost:8080/api/pipeline';

  constructor(private http: HttpClient) { }

  public obtenerTodos() : Observable<any> {
    return this.http.get(this.URL);
  }
  public obtenerAlcaldias() : Observable<any> {
    return this.http.get(this.URL + "/alcaldias");
  }
  public unidadesDisponibles() : Observable<any> {
    return this.http.get(this.URL + '/udisponibles');
  }
  public vehicleById(id: number) : Observable<any> {
    return this.http.get(this.URL + '/vehiculo/'+id);
  }
  public unidadesPorAlcaldia(alcaldia: string) : Observable<any> {
    return this.http.get(this.URL + '/alcaldia/'+alcaldia);
  }
}
