import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClasseGrade } from '../models/classe-grade';
import { ParametreService } from '../services/parametre.service';

@Component({
  selector: 'app-classe-grade',
  templateUrl: './classe-grade.component.html',
  styleUrls: ['./classe-grade.component.scss']
})
export class ClasseGradeComponent implements OnInit {
  public classes!: ClasseGrade[];
  public searchClasseForm!: FormGroup;
  public editClasseForm!: FormGroup;
  public submitted!: Boolean;
  public submittedSearch!: Boolean;
  public p!: number;
  public ipp!: number;

  constructor(private api: ParametreService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.searchClasseForm = this.fb.group({
      nom: [''],
      active: ['']
    });
    this.editClasseForm = this.fb.group({
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
    this.api.findAllClasseGrade().subscribe(
      (response: ClasseGrade[]) => {
        this.classes = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  public get f() { return this.editClasseForm.controls; }

  public addClasse() {
    this.submitted = true;
    if (this.editClasseForm.invalid)
      return;
    let classe = new ClasseGrade();
    classe.nom = this.editClasseForm.value.nom;
    classe.active = Boolean(parseInt(this.editClasseForm.value.active));
    if (this.editClasseForm.value.id == '') {
      this.api.add(classe, '/v1/classeGrades/add').subscribe(
        (response: any) => {
          this.effacerChamps();
          this.getData();
        }
      );
    } else {
      classe.id = parseInt(this.editClasseForm.value.id);
      this.api.update(classe, '/v1/classeGrades/update').subscribe(
        (response: any) => {
          this.effacerChamps();
          this.getData();
        }
      );
    }
  }

  public searchClasse() {
    if (this.searchClasseForm.value.nom == '' && this.searchClasseForm.value.active == '') {
      this.submittedSearch = true;
      return;
    }
    let classe = new ClasseGrade();
    classe.nom = this.searchClasseForm.value.nom;
    if (this.searchClasseForm.value.active != '')
      classe.active = Boolean(parseInt(this.searchClasseForm.value.active));
  }

  public effacerChamps() {
    this.editClasseForm.patchValue({
      id: '',
      nom: '',
      active: ''
    });
    this.submitted = false;
  }

  public effacerSearchChamps() {
    this.searchClasseForm.patchValue({
      nom: '',
      active: ''
    });
    this.submittedSearch = false;
  }

  public getClasse(classe: ClasseGrade) {
    this.editClasseForm.patchValue({
      id: classe.id.toString(),
      nom: classe.nom,
      active: (classe.active == true) ? '1' : '0'
    });
  }

  public getIpp(nombre: string) {
    this.ipp = parseInt(nombre);
  }

}
