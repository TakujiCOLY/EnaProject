import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Eleve } from '../models/eleve';
import { SearchEleve } from '../models/search-eleve';

@Injectable({
  providedIn: 'root'
})
export class EleveService {
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

  public findById(id: number): Observable<Eleve> {
    return this.http.get<Eleve>(`${this.api}/v1/eleves/findOne/${id}`);
  }

  public findAll(): Observable<Eleve[]> {
    return this.http.get<Eleve[]>(`${this.api}/v1/eleves/findAll`);
  }

  public findEleves(model: any): Observable<Eleve[]> {
    return this.http.post<Eleve[]>(`${this.api}/v1/eleves/findEleves`, model, this.httpOptions);
  }
}
