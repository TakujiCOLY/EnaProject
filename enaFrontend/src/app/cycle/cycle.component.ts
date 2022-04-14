import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { error } from 'protractor';
import { Cycle } from '../models/cycle';
import { ParametreService } from '../services/parametre.service';

@Component({
  selector: 'app-cycle',
  templateUrl: './cycle.component.html',
  styleUrls: ['./cycle.component.scss']
})
export class CycleComponent implements OnInit {
  public cycles!: Cycle[];
  public searchCycleForm!: FormGroup;
  public editCycleForm!: FormGroup;
  public submitted!: Boolean;
  public submittedSearch!: Boolean;
  public p!: number;
  public ipp!: number;

  constructor(private api: ParametreService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.searchCycleForm = this.fb.group({
      nom: [''],
      active: ['']
    });
    this.editCycleForm = this.fb.group({
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
    this.api.findAllCycle().subscribe(
      (response: Cycle[]) => {
        this.cycles = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  public get f() { return this.editCycleForm.controls; }

  public addCycle() {
    this.submitted = true;
    if (this.editCycleForm.invalid)
      return;
    let cycle = new Cycle();
    cycle.nom = this.editCycleForm.value.nom;
    cycle.active = Boolean(parseInt(this.editCycleForm.value.active));
    if (this.editCycleForm.value.id == '') {
      this.api.add(cycle, '/v1/cycles/add').subscribe(
        (response: any) => {
          this.effacerChamps();
          this.getData();
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
    } else {
      cycle.id = parseInt(this.editCycleForm.value.id);
      this.api.update(cycle, '/v1/cycles/update').subscribe(
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

  public searchCycle() {
    if (this.searchCycleForm.value.nom == '' && this.searchCycleForm.value.active == '') {
      this.submittedSearch = true;
      return;
    }
    let cycle = new Cycle();
    cycle.nom = this.searchCycleForm.value.nom;
    if (this.searchCycleForm.value.active != '')
      cycle.active = Boolean(parseInt(this.searchCycleForm.value.active));
  }

  public getCycle(cycle: Cycle) {
    this.editCycleForm.patchValue({
      id: cycle.id.toString(),
      nom: cycle.nom,
      active: (cycle.active == true) ? '1' : '0'
    });
  }

  public effacerChamps() {
    this.submitted = false;
    this.editCycleForm.patchValue({
      id: '',
      nom: '',
      active: ''
    });
  }

  public effacerSearchChamps() {
    this.submittedSearch = false;
    this.searchCycleForm.patchValue({
      nom: '',
      active: ''
    });
  }

  public getIpp(nombre: string) {
    this.ipp = parseInt(nombre);
  }

}
