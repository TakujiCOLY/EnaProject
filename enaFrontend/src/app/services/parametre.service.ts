import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClasseGrade } from '../models/classe-grade';
import { Corps } from '../models/corps';
import { Cycle } from '../models/cycle';
import { Echelon } from '../models/echelon';
import { EtatValidation } from '../models/etat-validation';
import { Hierarchie } from '../models/hierarchie';
import { Pays } from '../models/pays';
import { Promotion } from '../models/promotion';
import { Region } from '../models/region';
import { Section } from '../models/section';
import { Statut } from '../models/statut';
import { Ville } from '../models/ville';
import { VoieAcces } from '../models/voie-acces';

@Injectable({
  providedIn: 'root'
})
export class ParametreService {
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

  public delete(url: string) {
    return this.http.delete(this.api + url, this.httpOptions);
  }

  public findAllClasseGrade(): Observable<ClasseGrade[]> {
    return this.http.get<ClasseGrade[]>(`${this.api}/v1/classeGrades/findAll`);
  }

  public findRegionsByPaysId(id: number): Observable<Region[]> {
    return this.http.get<Region[]>(`${this.api}/v1/regions/findByPays/${id}`);
  }

  public findVillesByRegionId(id: number): Observable<Ville[]> {
    return this.http.get<Ville[]>(`${this.api}/v1/villes/findByRegion/${id}`);
  }

  public findAllCorps(): Observable<Corps[]> {
    return this.http.get<Corps[]>(`${this.api}/v1/corpses/findAll`);
  }

  public findAllCycle(): Observable<Cycle[]> {
    return this.http.get<Cycle[]>(`${this.api}/v1/cycles/findAll`);
  }

  public findAllEchelon(): Observable<Echelon[]> {
    return this.http.get<Echelon[]>(`${this.api}/v1/echelons/findAll`);
  }

  public findAllEtatValidation(): Observable<EtatValidation[]> {
    return this.http.get<EtatValidation[]>(`${this.api}/v1/etatValidations/findAll`);
  }

  public findAllHierarchie(): Observable<Hierarchie[]> {
    return this.http.get<Hierarchie[]>(`${this.api}/v1/hierarchies/findAll`);
  }

  public findAllPays(): Observable<Pays[]> {
    return this.http.get<Pays[]>(`${this.api}/v1/payses/findAll`);
  }

  public findAllPromotion(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(`${this.api}/v1/promotions/findAll`);
  }

  public findAllRegion(): Observable<Region[]> {
    return this.http.get<Region[]>(`${this.api}/v1/regions/findAll`);
  }

  public findAllSection(): Observable<Section[]> {
    return this.http.get<Section[]>(`${this.api}/v1/sections/findAll`);
  }

  public findAllStatut(): Observable<Statut[]> {
    return this.http.get<Statut[]>(`${this.api}/v1/statuts/findAll`);
  }

  public findAllVille(): Observable<Ville[]> {
    return this.http.get<Ville[]>(`${this.api}/v1/villes/findAll`);
  }

  public findAllVoieAcces(): Observable<VoieAcces[]> {
    return this.http.get<VoieAcces[]>(`${this.api}/v1/voieAcceses/findAll`);
  }
}
