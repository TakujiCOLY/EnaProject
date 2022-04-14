import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Statut } from '../models/statut';
import { ParametreService } from '../services/parametre.service';

@Component({
  selector: 'app-statut',
  templateUrl: './statut.component.html',
  styleUrls: ['./statut.component.scss']
})
export class StatutComponent implements OnInit {
  public statuts!: Statut[];
  public searchStatutForm!: FormGroup;
  public editStatutForm!: FormGroup;
  public submitted!: Boolean;
  public submittedSearch!: Boolean;
  public p!: number;
  public ipp!: number;

  constructor(private api: ParametreService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.searchStatutForm = this.fb.group({
      nom: [''],
      active: ['']
    });
    this.editStatutForm = this.fb.group({
      id: [''],
      nom: ['', Validators.required],
      active: ['', Validators.required]
    });
    this.ipp = 10;
    this.p = 1;
    this.submitted = false;
    this.submittedSearch = false;
    this.getData();
  }

  public getData() {
    this.api.findAllStatut().subscribe(
      (response: Statut[]) => {
        this.statuts = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  public get f() { return this.editStatutForm.controls; }

  public addStatut() {
    this.submitted = true;
    if (this.editStatutForm.invalid)
      return;
    let statut = new Statut();
    statut.nom = this.editStatutForm.value.nom;
    statut.active = Boolean(parseInt(this.editStatutForm.value.active));
    if (this.editStatutForm.value.id == '') {
      this.api.add(statut, '/v1/statuts/add').subscribe(
        (response: any) => {
          this.effacerChamps();
          this.getData();
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
    } else {
      statut.id = parseInt(this.editStatutForm.value.id);
      this.api.update(statut, '/v1/statuts/update').subscribe(
        (response: any) => {
          this.effacerChamps();
          this.getData();
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
    }
  }

  public searchStatut() {
    if (this.searchStatutForm.value.nom == '' && this.searchStatutForm.value.active == '') {
      this.submittedSearch = true;
      return;
    }
    let statut = new Statut();
    statut.nom = this.searchStatutForm.value.nom;
    if (this.searchStatutForm.value.active != '')
      statut.active = Boolean(parseInt(this.searchStatutForm.value.active));
  }

  public getStatut(statut: Statut) {
    this.editStatutForm.patchValue({
      id: statut.id.toString(),
      nom: statut.nom,
      active: (statut.active == true) ? '1' : '0'
    });
  }

  public effacerChamps() {
    this.editStatutForm.patchValue({
      id: '',
      nom: '',
      active: ''
    });
    this.submitted = false;
  }

  public effacerSearchChamps() {
    this.searchStatutForm.patchValue({
      nom: '',
      active: ''
    });
    this.submittedSearch = false;
  }

  public getIpp(nombre: string) {
    this.ipp = parseInt(nombre);
  }

}
