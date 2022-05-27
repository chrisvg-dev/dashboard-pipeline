import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GoogleService {
  public mapsUrl: string = environment.URL_GOOGLE;
  public apiMaps: string = environment.API_KEY_GOOGLE;

  constructor( private http: HttpClient) { }

  public buscarAlcaldia(coord: string): Observable<any> {
    return this.http.get(this.mapsUrl+coord+'&key='+this.apiMaps);
  }
}
