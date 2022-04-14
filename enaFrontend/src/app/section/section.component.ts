import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Section } from '../models/section';
import { ParametreService } from '../services/parametre.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  public sections!: Section[];
  public searchSectionForm!: FormGroup;
  public editSectionForm!: FormGroup;
  public submitted!: Boolean;
  public submittedSearch!: Boolean;
  public p!: number;
  public ipp!: number;

  constructor(private api: ParametreService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.searchSectionForm = this.fb.group({
      nom: [''],
      active: ['']
    });
    this.editSectionForm = this.fb.group({
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
    this.api.findAllSection().subscribe(
      (response: Section[]) => {
        this.sections = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  public get f() { return this.editSectionForm.controls; }

  public addSection() {
    this.submitted = true;
    if (this.editSectionForm.invalid)
      return;
    let section = new Section();
    section.nom = this.editSectionForm.value.nom;
    section.active = Boolean(parseInt(this.editSectionForm.value.active));
    if (this.editSectionForm.value.id == '') {
      this.api.add(section, '/v1/sections/add').subscribe(
        (response: any) => {
          this.effacerChamps();
          this.getData();
        },
        (error: HttpErrorResponse) => {
          console.log(error)
        }
      );
    } else {
      section.id = parseInt(this.editSectionForm.value.id);
      this.api.update(section, '/v1/sections/update').subscribe(
        (response: any) => {
          this.effacerChamps();
          this.getData();
        },
        (error: HttpErrorResponse) => {
          this.effacerChamps();
          this.getData();
        }
      );
    }
  }

  public searchSection() {
    if (this.searchSectionForm.value.nom == '' && this.searchSectionForm.value.active == '') {
      this.submittedSearch = true;
      return;
    }
    let section = new Section();
    section.nom = this.searchSectionForm.value.nom;
    if (this.searchSectionForm.value.active != '')
      section.active = Boolean(parseInt(this.searchSectionForm.value.active));
  }

  public getSection(section: Section) {
    this.editSectionForm.patchValue({
      id: section.id.toString(),
      nom: section.nom,
      active: (section.active == true) ? '1' : '0'
    });
  }

  public effacerChamps() {
    this.editSectionForm.patchValue({
      id: '',
      nom: '',
      active: ''
    });
    this.submitted = false;
  }

  public effacerSearchChamps() {
    this.searchSectionForm.patchValue({
      nom: '',
      active: ''
    });
  }

  public getIpp(nombre: string) {
    this.ipp = parseInt(nombre);
  }

}
