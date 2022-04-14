import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { error } from 'protractor';
import { Corps } from '../models/corps';
import { ParametreService } from '../services/parametre.service';

@Component({
  selector: 'app-corps',
  templateUrl: './corps.component.html',
  styleUrls: ['./corps.component.scss']
})
export class CorpsComponent implements OnInit {
  public corps!: Corps[];
  public searchCorpsForm!: FormGroup;
  public editCorpsForm!: FormGroup;
  public submitted!: Boolean;
  public submittedSearch!: Boolean;
  public p!: number;
  public ipp!: number;

  constructor(private api: ParametreService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.searchCorpsForm = this.fb.group({
      nom: [''],
      active: ['']
    });
    this.editCorpsForm = this.fb.group({
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
    this.api.findAllCorps().subscribe(
      (response: Corps[]) => {
        this.corps = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  public get f() { return this.editCorpsForm.controls; }

  public addCorps() {
    this.submitted = true;
    if (this.editCorpsForm.invalid)
      return;
    let corp = new Corps();
    corp.nom = this.editCorpsForm.value.nom;
    corp.active = Boolean(parseInt(this.editCorpsForm.value.active));
    if (this.editCorpsForm.value.id == '') {
      this.api.add(corp, '/v1/corpses/add').subscribe(
        (repsonse: any) => {
          this.getData();
          this.effacerChamps();
        },
        (error: HttpErrorResponse) => {
          console.log(error)
        }
      );
    } else {
      corp.id = parseInt(this.editCorpsForm.value.id);
      this.api.update(corp, '/v1/corpses/update').subscribe(
        (response: any) => {
          this.effacerChamps();
          this.getData();
        }
      );
    }
  }

  public searchCorps() {
    if (this.searchCorpsForm.value.nom == '' && this.searchCorpsForm.value.active == '') {
      this.submittedSearch = true;
      return;
    }
    let corp = new Corps();
    corp.nom = this.searchCorpsForm.value.nom;
    if (this.searchCorpsForm.value.active != '')
      corp.active = Boolean(parseInt(this.searchCorpsForm.value.active));
  }

  public effacerChamps() {
    this.submitted = false;
    this.editCorpsForm.patchValue({
      id: '',
      nom: '',
      active: ''
    }); 
  }

  public effacerSearchChamps() {
    this.submittedSearch = false;
    this.searchCorpsForm.patchValue({
      nom: '',
      active: ''
    });
  }

  public getCorps(corps: Corps) {
    this.editCorpsForm.patchValue({
      id: corps.id.toString(),
      nom: corps.nom,
      active: (corps.active == true) ? '1' : '0'
    });
  }

  public getIpp(nombre: string) {
    this.ipp = parseInt(nombre);
  }

}
