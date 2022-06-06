import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StreamService {
  private URL: string = environment.URL_SERVICE;

  constructor(private http: HttpClient) { }

  public stream() : Observable<any> {
    return this.http.get(this.URL + "api/pipeline/recolectar");
  }
}
