import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EtatValidation } from '../models/etat-validation';
import { ParametreService } from '../services/parametre.service';

@Component({
  selector: 'app-etat-validation',
  templateUrl: './etat-validation.component.html',
  styleUrls: ['./etat-validation.component.scss']
})
export class EtatValidationComponent implements OnInit {
  public validations!: EtatValidation[];
  public searchValidationForm!: FormGroup;
  public editValidationForm!: FormGroup;
  public submitted!: Boolean;
  public submittedSearch!: Boolean;
  public p!: number;
  public ipp!: number;

  constructor(private api: ParametreService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.searchValidationForm = this.fb.group({
      nom: [''],
      active: ['']
    });
    this.editValidationForm = this.fb.group({
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
    this.api.findAllEtatValidation().subscribe(
      (response: EtatValidation[]) => {
        this.validations = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  public get f() { return this.editValidationForm.controls; }

  public addValidation() {
    this.submitted = true;
    if (this.editValidationForm.invalid)
      return;
    let validation = new EtatValidation();
    validation.nom = this.editValidationForm.value.nom;
    validation.active = Boolean(parseInt(this.editValidationForm.value.active));
    if (this.editValidationForm.value.id == '') {
      this.api.add(validation, '/v1/etatValidations/add').subscribe(
        (response: any) => {
          this.effacerChamps();
          this.getData();
        }
      );
    } else {
      validation.id = parseInt(this.editValidationForm.value.id);
      this.api.update(validation, '/v1/etatValidations/update').subscribe(
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

  public searchValidation() {
    if (this.searchValidationForm.value.nom == '' && this.searchValidationForm.value.active == '') {
      this.submittedSearch = true;
      return;
    }
    let validation = new EtatValidation();
    validation.nom = this.searchValidationForm.value.nom;
    if (this.searchValidationForm.value.active != '')
      validation.active = Boolean(parseInt(this.searchValidationForm.value.active));
  }

  public getValidation(validation: EtatValidation) {
    this.editValidationForm.patchValue({
      id: validation.id.toString(),
      nom: validation.nom,
      active: (validation.active == true) ? '1' : '0'
    });
  }

  public effacerChamps() {
    this.editValidationForm.patchValue({
      id: '',
      nom: '',
      active: ''
    });
    this.submitted = false;
  }

  public effacerSearchChamps() {
    this.searchValidationForm.patchValue({
      nom: '',
      active: ''
    });
    this.submittedSearch = false;
  }

  public getIpp(nombre: string) {
    this.ipp = parseInt(nombre);
  }
}
