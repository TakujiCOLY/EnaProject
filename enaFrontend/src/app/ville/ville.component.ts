import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pays } from '../models/pays';
import { Region } from '../models/region';
import { Ville } from '../models/ville';
import { ParametreService } from '../services/parametre.service';

@Component({
  selector: 'app-ville',
  templateUrl: './ville.component.html',
  styleUrls: ['./ville.component.scss']
})
export class VilleComponent implements OnInit {
  public regionSearch!: Region[];
  public regionAdd!: Region[];
  public pays!: Pays[];
  public villes!: Ville[];
  public searchVilleForm!: FormGroup;
  public editVilleForm!: FormGroup;
  public submitted!: Boolean;
  public submittedSearch!: Boolean;
  public p!: number;
  public ipp!: number;

  constructor(private api: ParametreService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.searchVilleForm = this.fb.group({
      nom: [''],
      region: [''],
      pays: [''],
      active: ['']
    });
    this.editVilleForm = this.fb.group({
      id: [''],
      nom: ['', Validators.required],
      region: ['', Validators.required],
      pays: [''],
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
    this.api.findAllVille().subscribe(
      (response: Ville[]) => {
        this.villes = response;
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

  public getRegionsSearch(id: string) {
    if (id != '') {
      this.api.findRegionsByPaysId(parseInt(id)).subscribe(
        (response: Region[]) => {
          this.regionSearch = response;
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
    }
  }

  public getRegionAdd(id: string) {
    if (id != '') {
      this.api.findRegionsByPaysId(parseInt(id)).subscribe(
        (response: Region[]) => {
          this.regionAdd = response;
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
    }
  }

  public get f() { return this.editVilleForm.controls; }

  public addVille() {
    this.submitted = true;
    if (this.editVilleForm.invalid)
      return;
    let ville = new Ville();
    ville.nom = this.editVilleForm.value.nom;
    ville.region = parseInt(this.editVilleForm.value.region);
    ville.active = Boolean(parseInt(this.editVilleForm.value.active));
    if (this.editVilleForm.value.id == '') {
      this.api.add(ville, '/v1/villes/add').subscribe(
        (response: any) => {
          this.effacerChamps();
          this.getData();
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
    } else {
      this.api.update(ville, '/v1/villes/update').subscribe(
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

  public searchVille() {
    if (this.searchVilleForm.value.nom == '' && this.searchVilleForm.value.active == '') {
      this.submittedSearch = true;
      return;
    }
    let ville = new Ville();
    ville.nom = this.searchVilleForm.value.nom;
    ville.region = this.searchVilleForm.value.region;
    if (this.searchVilleForm.value.active != '')
      ville.active = Boolean(parseInt(this.searchVilleForm.value.active));
  }

  public getVille(ville: Ville) {
    this.getRegionAdd(ville.region.pays.id);
    this.editVilleForm.patchValue({
      id: ville.id.toString(),
      nom: ville.nom,
      pays: ville.region.pays.id.toString(),
      region: ville.region.id.toString(),
      active: (ville.active == true) ? '1' : '0'
    });
  }

  public effacerChamps() {
    this.editVilleForm.patchValue({
      id: '',
      nom: '',
      pays: '',
      region: '',
      active: ''
    });
    this.submitted = false;
  }

  public effacerSearchChamps() {
    this.searchVilleForm.patchValue({
      nom: '',
      region: '',
      active: '',
      pays: ''
    });
    this.submittedSearch = false;
  }

  public getIpp(nombre: string) {
    this.ipp = parseInt(nombre);
  }
}
