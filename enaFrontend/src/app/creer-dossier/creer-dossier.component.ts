import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Adresse } from '../models/adresse';
import { Cycle } from '../models/cycle';
import { Dossier } from '../models/dossier';
import { Eleve } from '../models/eleve';
import { EleveCycle } from '../models/eleve-cycle';
import { ElevePromotion } from '../models/eleve-promotion';
import { EleveSection } from '../models/eleve-section';
import { Pays } from '../models/pays';
import { Promotion } from '../models/promotion';
import { Region } from '../models/region';
import { Section } from '../models/section';
import { Telephone } from '../models/telephone';
import { Urgence } from '../models/urgence';
import { Ville } from '../models/ville';
import { VoieAcces } from '../models/voie-acces';
import { DossierService } from '../services/dossier.service';
import { EleveService } from '../services/eleve.service';
import { ParametreService } from '../services/parametre.service';

@Component({
  selector: 'app-creer-dossier',
  templateUrl: './creer-dossier.component.html',
  styleUrls: ['./creer-dossier.component.scss']
})
export class CreerDossierComponent implements OnInit {
  public voies!: VoieAcces[];
  public cycles!: Cycle[];
  public sections!: Section[];
  public promotions!: Promotion[];
  public editForm!: FormGroup;
  public submitted!: Boolean;
  public pays!: Pays[];
  public regions!: Region[];
  public villes!: Ville[];
  public eleves!: Eleve[];
  public p!: number;
  public ipp!: number;

  constructor(private api: ParametreService, private fb: FormBuilder, private dossierService: DossierService, private eleveService: EleveService) { }

  ngOnInit(): void {
    this.getData();
    this.eleves = [];
    this.submitted = false;
    this.editForm = this.fb.group({
      voieAcces: ['', Validators.required],
      cycle: ['', Validators.required],
      section: [''],
      typeEleve: ['', Validators.required],
      matricule: [''],
      numConcours: [''],
      promotion: ['', Validators.required],
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      dateNaiss: ['', Validators.required],
      sexe: ['', Validators.required],
      nationalite: ['', Validators.required],
      nci: ['', Validators.required],
      pays: [''],
      region: [''],
      ville: [''],
      lieuNaiss: ['', Validators.required],
      prenomPere: ['', Validators.required],
      prenomMere: ['', Validators.required],
      nomMere: ['', Validators.required],
      nomPere: ['', Validators.required],
      aDakar: [''],
      horsDakar: [''],
      emailPrive: ['', Validators.required],
      emailPro: [''],
      mobile1: ['', Validators.required],
      mobile2: [''],
      mobile3: [''],
      domicile: [''],
      prenomUrgence: ['', Validators.required],
      nomUrgence: ['', Validators.required],
      telephoneUrgence: ['', Validators.required],
      adresseUrgence: ['', Validators.required]
    });
    this.ipp = 10;
    this.p = 1;
  }

  public getData() {
    this.api.findAllVoieAcces().subscribe(
      (response: VoieAcces[]) => { this.voies = response; },
      (error: HttpErrorResponse) => { console.log(error); });
    this.api.findAllCycle().subscribe(
      (response: Cycle[]) => { this.cycles = response; },
      (error: HttpErrorResponse) => { console.log(error); });
    this.api.findAllSection().subscribe(
      (response: Section[]) => { this.sections = response; },
      (error: HttpErrorResponse) => { console.log(error); });
    this.api.findAllPromotion().subscribe(
      (response: Promotion[]) => { this.promotions = response; },
      (error: HttpErrorResponse) => { console.log(error); });
    this.api.findAllPays().subscribe(
      (response: Pays[]) => { this.pays = response; },
      (error: HttpErrorResponse) => { console.log(error); });
  }

  public getRegions(event: any) {
    if (event.target.value != '') {
      this.api.findRegionsByPaysId(parseInt(event.target.value)).subscribe(
        (response: Region[]) => { this.regions = response; },
        (error: HttpErrorResponse) => { console.log(error); });
    }
  }

  public getVilles(event: any) {
    if (event.target.value != '') {
      this.api.findVillesByRegionId(parseInt(event.target.value)).subscribe(
        (response: Ville[]) => { this.villes = response; },
        (error: HttpErrorResponse) => { console.log(error); });
    }
  }

  public get f() { return this.editForm.controls; }

  public addDossier() {
    this.submitted = true;
    if (this.editForm.invalid)
      return;
    let dossier = new Dossier();
    let eleve = new Eleve();
    let adresse = new Adresse();
    let urgence = new Urgence();
    let telephone = new Telephone();
    let eleveCycle = new EleveCycle();
    let elevePromotion = new ElevePromotion();
    let eleveSection = new EleveSection();
    eleve.nom = this.editForm.value.nom;
    eleve.prenom = this.editForm.value.prenom;
    eleve.typeEleve = this.editForm.value.typeEleve;
    eleve.sexe = this.editForm.value.sexe;
    eleve.dateNaiss = new Date(this.editForm.value.dateNaiss);
    eleve.nationalite = this.editForm.value.nationalite;
    eleve.nci = this.editForm.value.nci;
    eleve.lieuNaiss = this.editForm.value.lieuNaiss
    eleve.prenomMere = this.editForm.value.prenomMere;
    eleve.prenomPere = this.editForm.value.prenomPere;
    eleve.nomMere = this.editForm.value.nomMere;
    eleve.nomPere = this.editForm.value.nomPere;
    eleve.matricule = this.editForm.value.matricule;
    eleve.numDosCandidat = this.editForm.value.numConcours;
    eleve.ville = parseInt(this.editForm.value.ville);
    eleve.emailPrive = this.editForm.value.emailPrive;
    eleve.emailPro = this.editForm.value.emailPro;
    dossier.voieAcces = parseInt(this.editForm.value.voieAcces);
    elevePromotion.promotion = parseInt(this.editForm.value.promotion);
    if (this.editForm.value.section != '') {
      eleveSection.section = parseInt(this.editForm.value.section);
    }
    eleveCycle.cycle = parseInt(this.editForm.value.cycle);
    adresse.dakar = this.editForm.value.aDakar;
    adresse.horsDakar = this.editForm.value.horsDakar;
    telephone.mobile1 = this.editForm.value.mobile1;
    telephone.mobile2 = this.editForm.value.mobile2;
    telephone.mobile3 = this.editForm.value.mobile3;
    telephone.domicile = this.editForm.value.domicile;
    urgence.prenom = this.editForm.value.prenomUrgence;
    urgence.nom = this.editForm.value.nomUrgence;
    urgence.adresse = this.editForm.value.adresseUrgence;
    urgence.telephone = this.editForm.value.telephoneUrgence;
    this.eleveService.add(eleve, '/eleves/add').subscribe(
      (response: any) => {
        console.log(response)
        let idEleve = response.id;
        dossier.eleve = idEleve;
        elevePromotion.eleve = idEleve;
        eleveSection.eleve = idEleve;
        eleveCycle.eleve = idEleve;
        adresse.eleve = idEleve;
        telephone.eleve = idEleve;
        urgence.eleve = idEleve;
        this.dossierService.add(dossier, '/dossiers/add').subscribe(
          (response8: any) => { },
          (error: HttpErrorResponse) => { console.log(error); }
        );
        this.eleveService.add(elevePromotion, '/elevePromotions/add').subscribe(
          (response1: any) => { },
          (error: HttpErrorResponse) => { console.log(error) }
        );
        this.eleveService.add(eleveSection, '/eleveSections/add').subscribe(
          (response2: any) => { },
          (error: HttpErrorResponse) => { console.log(error); }
        );
        this.eleveService.add(eleveCycle, '/eleveCycles/add').subscribe(
          (response3: any) => { },
          (error: HttpErrorResponse) => { console.log(error); }
        );
        this.eleveService.add(adresse, '/adresses/add').subscribe(
          (response4: any) => { },
          (error: HttpErrorResponse) => { console.log(error); }
        );
        this.eleveService.add(telephone, '/telephones/add').subscribe(
          (response5: any) => { },
          (error: HttpErrorResponse) => { console.log(error); }
        );
        this.eleveService.add(urgence, '/urgences/add').subscribe(
          (response6: any) => { },
          (error: HttpErrorResponse) => { console.log(error); }
        );
        this.eleveService.findById(idEleve).subscribe(
          (response7: Eleve) => { this.eleves.push(response7) },
          (error: HttpErrorResponse) => { console.log(error); }
        );
        this.effacerChamps();
      },
      (error: HttpErrorResponse) => { console.log(error); }
    );
  }

  public effacerChamps() {
    this.submitted = false;
    this.editForm.patchValue({
      voieAcces: '',
      typeEleve: '',
      numConcours: '',
      cycle: '',
      matricule: '',
      promotion: '',
      section: '',
      prenom: '',
      nom: '',
      dateNaiss: '',
      sexe: '',
      nationalite: '',
      nci: '',
      pays: '',
      region: '',
      ville: '',
      lieuNaiss: '',
      prenomPere: '',
      prenomMere: '',
      nomMere: '',
      nomPere: '',
      aDakar: '',
      horsDakar: '',
      emailPrive: '',
      emailPro: '',
      mobile1: '',
      mobile2: '',
      mobile3: '',
      domicile: '',
      prenomUrgence: '',
      nomUrgence: '',
      telephoneUrgence: '',
      adresseUrgence: ''
    });
  }
}
