import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pays } from '../models/pays';
import { Region } from '../models/region';
import { ParametreService } from '../services/parametre.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {
  public regions!: Region[];
  public pays!: Pays[];
  public searchRegionForm!: FormGroup;
  public editRegionForm!: FormGroup;
  public submitted!: Boolean;
  public submittedSearch!: Boolean;
  public p!: number;
  public ipp!: number;

  constructor(private api: ParametreService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.searchRegionForm = this.fb.group({
      nom: [''],
      pays: [''],
      active: ['']
    });
    this.editRegionForm = this.fb.group({
      id: [''],
      nom: ['', Validators.required],
      pays: ['', Validators.required],
      active: ['', Validators.required]
    });
    this.ipp = 10;
    this.p = 1;
    this.submitted = false;
    this.submittedSearch = false;
    this.getData();
    this.getPays();
  }

  public getData() {
    this.api.findAllRegion().subscribe(
      (response: Region[]) => {
        this.regions = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  public getPays() {
    this.api.findAllPays().subscribe(
      (response: Pays[]) => {
        this.pays = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  public get f() { return this.editRegionForm.controls; }

  public addRegion() {
    this.submitted = true;
    if (this.editRegionForm.invalid)
      return;
    let region = new Region();
    region.nom = this.editRegionForm.value.nom;
    region.pays = parseInt(this.editRegionForm.value.pays);
    region.active = Boolean(parseInt(this.editRegionForm.value.active));
    if (this.editRegionForm.value.id == '') {
      this.api.add(region, '/v1/regions/add').subscribe(
        (response: any) => {
          this.effacerChamps();
          this.getData();
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
    } else {
      region.id = parseInt(this.editRegionForm.value.id);
      this.api.update(region, '/v1/regions/update').subscribe(
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

  public searchRegion() {
    if (this.searchRegionForm.value.nom == '' && this.searchRegionForm.value.pays == '') {
      this.submittedSearch = true;
      return;
    }
    let region = new Region();
    region.nom = this.searchRegionForm.value.nom;
    region.pays = this.searchRegionForm.value.pays;
    if (this.searchRegionForm.value.active != '')
      region.active = Boolean(parseInt(this.searchRegionForm.value.active));
  }

  public getRegion(region: Region) {
    this.editRegionForm.patchValue({
      id: region.id.toString(),
      nom: region.nom,
      pays: region.pays.id.toString(),
      active: (region.active == true) ? '1' : '0'
    });
  }

  public effacerChamps() {
    this.editRegionForm.patchValue({
      id: '',
      nom: '',
      pays: '',
      active: ''
    });
    this.submitted = false;
  }

  public effacerSearchChamps() {
    this.submittedSearch = false;
    this.searchRegionForm.patchValue({
      nom: '',
      pays: '',
      active: ''
    });
  }

  public getIpp(nombre: string) {
    this.ipp = parseInt(nombre);
  }

}
