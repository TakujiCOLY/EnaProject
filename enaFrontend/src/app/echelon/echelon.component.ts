import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Echelon } from '../models/echelon';
import { ParametreService } from '../services/parametre.service';

@Component({
  selector: 'app-echelon',
  templateUrl: './echelon.component.html',
  styleUrls: ['./echelon.component.scss']
})
export class EchelonComponent implements OnInit {
  public echelons!: Echelon[];
  public searchEchelonForm!: FormGroup;
  public editEchelonForm!: FormGroup;
  public submitted!: Boolean;
  public submittedSearch!: Boolean;
  public p!: number;
  public ipp!: number;

  constructor(private api: ParametreService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.searchEchelonForm = this.fb.group({
      nom: [''],
      active: ['']
    });
    this.editEchelonForm = this.fb.group({
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
    this.api.findAllEchelon().subscribe(
      (response: Echelon[]) => {
        this.echelons = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  public get f() { return this.editEchelonForm.controls; }

  public addEchelon() {
    this.submitted = true;
    if (this.editEchelonForm.invalid)
      return;
    let echelon = new Echelon();
    echelon.nom = this.editEchelonForm.value.nom;
    echelon.active = Boolean(parseInt(this.editEchelonForm.value.active));
    if (this.editEchelonForm.value.id == '') {
      this.api.add(echelon, '/v1/echelons/add').subscribe(
        (response: any) => {
          this.effacerChamps();
          this.getData();
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
    } else {
      echelon.id = parseInt(this.editEchelonForm.value.id);
      this.api.update(echelon, '/v1/echelons/update').subscribe(
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

  public searchEchelon() {
    if (this.searchEchelonForm.value.nom == '' && this.searchEchelonForm.value.active == '') {
      this.submittedSearch = false;
      return;
    }
    let echelon = new Echelon();
    echelon.nom = this.searchEchelonForm.value.nom;
    if (this.searchEchelonForm.value.active != '')
      echelon.active = Boolean(parseInt(this.searchEchelonForm.value.active));
  }

  public getEchelon(echelon: Echelon) {
    this.editEchelonForm.patchValue({
      id: echelon.id.toString(),
      nom: echelon.nom,
      active: (echelon.active == true) ? '1' : '0'
    });
  }

  public effacerChamps() {
    this.editEchelonForm.patchValue({
      id: '',
      nom: '',
      active: ''
    });
    this.submitted = false;
  }

  public effacerSearchChamps() {
    this.searchEchelonForm.patchValue({
      nom: '',
      active: ''
    });
  }

  public getIpp(nombre: string) {
    this.ipp = parseInt(nombre);
  }

}
