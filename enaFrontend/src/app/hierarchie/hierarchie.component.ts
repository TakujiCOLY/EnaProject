import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Hierarchie } from '../models/hierarchie';
import { ParametreService } from '../services/parametre.service';

@Component({
  selector: 'app-hierarchie',
  templateUrl: './hierarchie.component.html',
  styleUrls: ['./hierarchie.component.scss']
})
export class HierarchieComponent implements OnInit {
  public hierarchies!: Hierarchie[];
  public searchHierarchieForm!: FormGroup;
  public editHierarchieForm!: FormGroup;
  public submitted!: Boolean;
  public submittedSearch!: Boolean;
  public p!: number;
  public ipp!: number;

  constructor(private api: ParametreService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.searchHierarchieForm = this.fb.group({
      nom: [''],
      active: ['']
    });
    this.editHierarchieForm = this.fb.group({
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
    this.api.findAllHierarchie().subscribe(
      (response: Hierarchie[]) => {
        this.hierarchies = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  public get f() { return this.editHierarchieForm.controls; }

  public addHierarchie() {
    this.submitted = true;
    if (this.editHierarchieForm.invalid)
      return;
    let hierarchie = new Hierarchie();
    hierarchie.nom = this.editHierarchieForm.value.nom;
    hierarchie.active = Boolean(parseInt(this.editHierarchieForm.value.active));
    if (this.editHierarchieForm.value.id == '') {
      this.api.add(hierarchie, '/v1/hierarchies/add').subscribe(
        (response: any) => {
          this.effacerChamps();
          this.getData();
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
    } else {
      hierarchie.id = parseInt(this.editHierarchieForm.value.id);
      this.api.update(hierarchie, '/v1/hierarchies/update').subscribe(
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

  public searchHierarchie() {
    if (this.searchHierarchieForm.value.nom == '' && this.searchHierarchieForm.value.active == '') {
      this.submittedSearch = true;
      return;
    }
    let hierarchie = new Hierarchie();
    hierarchie.nom = this.searchHierarchieForm.value.nom;
    if (this.searchHierarchieForm.value.active != '') 
      hierarchie.active = Boolean(parseInt(this.searchHierarchieForm.value.active));
  }

  public getHierarchie(hierarchie: Hierarchie) {
    this.editHierarchieForm.patchValue({
      id: hierarchie.id.toString(),
      nom: hierarchie.nom,
      active: (hierarchie.active == true) ? '1' : '0'
    });
  }

  public effacerChamps() {
    this.editHierarchieForm.patchValue({
      id: '',
      nom: '',
      active: ''
    });
    this.submitted = false;
  }

  public effacerSearchChamps() {
    this.searchHierarchieForm.patchValue({
      nom: '',
      active: ''
    });
    this.submittedSearch = false;
  }

  public getIpp(nombre: string) {
    this.ipp = parseInt(nombre);
  }

}
