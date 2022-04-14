import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DossierService {
  private api: String = environment.apiBaseUrl;
  httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  public add(model: Object, url: string): Observable<Object> {
    return this.http.post<Object>(this.api + url, model, this.httpOptions);
  }

  public update(model: Object, url: string): Observable<Object> {
    return this.http.put<Object>(this.api + url, model, this.httpOptions);
  }

  public delete(url: string): Observable<void> {
    return this.http.delete<void>(this.api + url, this.httpOptions);
  }
}
