import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VoieAcces } from '../models/voie-acces';
import { ParametreService } from '../services/parametre.service';

@Component({
  selector: 'app-voie-acces',
  templateUrl: './voie-acces.component.html',
  styleUrls: ['./voie-acces.component.scss']
})
export class VoieAccesComponent implements OnInit {
  public voies!: VoieAcces[];
  public searchVoieForm!: FormGroup;
  public editVoieForm!: FormGroup;
  public submitted!: Boolean;
  public submittedSearch!: Boolean;
  public p!: number;
  public ipp!: number;

  constructor(private api: ParametreService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.searchVoieForm = this.fb.group({
      nom: [''],
      active: ['']
    });
    this.editVoieForm = this.fb.group({
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
    this.api.findAllVoieAcces().subscribe(
      (response: VoieAcces[]) => {
        this.voies = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  public get f() { return this.editVoieForm.controls; }

  public addVoie() {
    this.submitted = true;
    if (this.editVoieForm.invalid)
      return;
    let voie = new VoieAcces();
    voie.nom = this.editVoieForm.value.nom;
    voie.active = Boolean(parseInt(this.editVoieForm.value.active));
    if (this.editVoieForm.value.id == '') {
      this.api.add(voie, '/v1/voieAcceses/add').subscribe(
        (response: any) => {
          this.effacerChamps();
          this.getData();
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
    } else {
      voie.id = parseInt(this.editVoieForm.value.id);
      this.api.update(voie, '/v1/voieAcceses/update').subscribe(
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

  public searchVoie() {
    if (this.searchVoieForm.value.nom == '' && this.searchVoieForm.value.active == '') {
      this.submittedSearch = true;
      return;
    }
    let voie = new VoieAcces();
    voie.nom = this.searchVoieForm.value.nom;
    if (this.searchVoieForm.value.active != '')
      voie.active = Boolean(parseInt(this.searchVoieForm.value.active));
  }

  public getVoie(voie: VoieAcces) {
    this.editVoieForm.patchValue({
      id: voie.id.toString(),
      nom: voie.nom,
      active: (voie.active == true) ? '1' : '0'
    });
  }

  public effacerChamps() {
    this.editVoieForm.patchValue({
      id: '',
      nom: '',
      active: ''
    });
    this.submitted = false;
  }

  public effacerSearchChamps() {
    this.searchVoieForm.patchValue({
      nom: '',
      active: ''
    });
    this.submittedSearch = false;
  }

  public getIpp(nombre: string) {
    this.ipp = parseInt(nombre);
  }

}
