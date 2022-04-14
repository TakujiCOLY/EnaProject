import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pays } from '../models/pays';
import { ParametreService } from '../services/parametre.service';

@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.scss']
})
export class PaysComponent implements OnInit {
  public pays!: Pays[];
  public searchPaysForm!: FormGroup;
  public editPaysForm!: FormGroup;
  public submitted!: Boolean;
  public submittedSearch!: Boolean;
  public p!: number;
  public ipp!: number;

  constructor(private api: ParametreService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.editPaysForm = this.fb.group({
      id: [''],
      nom: ['', Validators.required],
      nationalite: ['', Validators.required],
      active: ['', Validators.required]
    });
    this.searchPaysForm = this.fb.group({
      nom: [''],
      nationalite: [''],
      active: ['']
    });
    this.getData();
    this.ipp = 10;
    this.p = 1;
  }

  public getData() {
    this.api.findAllPays().subscribe(
      (response: Pays[]) => {
        this.pays = response;
      }
    );
  }

  public get f() { return this.editPaysForm.controls; }

  public addPays() {
    this.submitted = true;
    if (this.editPaysForm.invalid)
      return;
    let pays = new Pays();
    pays.nom = this.editPaysForm.value.nom;
    pays.nationalite = this.editPaysForm.value.nationalite;
    pays.active = Boolean(parseInt(this.editPaysForm.value.active));
    if (this.editPaysForm.value.id == '') {
      this.api.add(pays, '/v1/payses/add').subscribe(
        (response: any) => {
          this.effacerChamps();
          this.getData();
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
    } else {
      pays.id = parseInt(this.editPaysForm.value.id);
      this.api.update(pays, '/v1/payses/update').subscribe(
        (response: any) => {
          this.getData();
          this.effacerChamps();
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
    }
  }

  public searchPays() {
    if (this.searchPaysForm.value.nom == '' && this.searchPaysForm.value.active == '' && this.searchPaysForm.value.nationalite == '') {
      this.submittedSearch = true;
      return;
    }
    let pays = new Pays();
    pays.nom = this.searchPaysForm.value.nom;
    pays.nationalite = this.searchPaysForm.value.nationalite;
    if (this.searchPaysForm.value.active != '')
      pays.active = this.searchPaysForm.value.active;
  }

  public getPays(pays: Pays) {
    this.editPaysForm.patchValue({
      id: pays.id.toString(),
      nom: pays.nom,
      nationalite: pays.nationalite,
      active: (pays.active == true) ? '1' : '0'
    });
  }

  public effacerChamps() {
    this.editPaysForm.patchValue({
      id: '',
      nom: '',
      nationalite: '',
      active: ''
    });
    this.submitted = false;
  }

  public effacerSearchChamps() {
    this.searchPaysForm.patchValue({
      nom: '',
      nationalite: '',
      active: ''
    });
    this.submittedSearch = false;
  }

  public getIpp(nombre: string) {
    this.ipp = parseInt(nombre);
  }

}
