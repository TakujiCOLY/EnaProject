import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClasseGrade } from '../models/classe-grade';
import { Corps } from '../models/corps';
import { Cycle } from '../models/cycle';
import { Echelon } from '../models/echelon';
import { Eleve } from '../models/eleve';
import { EtatValidation } from '../models/etat-validation';
import { Hierarchie } from '../models/hierarchie';
import { Pays } from '../models/pays';
import { Promotion } from '../models/promotion';
import { Region } from '../models/region';
import { SearchEleve } from '../models/search-eleve';
import { Section } from '../models/section';
import { Statut } from '../models/statut';
import { ValidationDossier } from '../models/validation-dossier';
import { Ville } from '../models/ville';
import { VoieAcces } from '../models/voie-acces';
import { DossierService } from '../services/dossier.service';
import { EleveService } from '../services/eleve.service';
import { ParametreService } from '../services/parametre.service';

@Component({
  selector: 'app-maj-dossier',
  templateUrl: './maj-dossier.component.html',
  styleUrls: ['./maj-dossier.component.scss']
})
export class MajDossierComponent implements OnInit {
  public sections!: Section[];
  public promotions!: Promotion[];
  public cycles!: Cycle[];
  public validations!: EtatValidation[];
  public p!: number;
  public ipp!: number;
  public searchForm!: FormGroup;
  public submitted!: Boolean;
  public editForm!: FormGroup;
  public eleves!: Eleve[];
  public eleve!: Eleve;
  public pays!: Pays[];
  public regions!: Region[];
  public villes!: Ville[];
  public voies!: VoieAcces[];
  public classes!: ClasseGrade[];
  public corps!: Corps[];
  public statuts!: Statut[];
  public echelons!: Echelon[];
  public hierarchies!: Hierarchie[];
  public docComplementaireForm!: FormGroup;
  
  constructor(private api: ParametreService, private fb: FormBuilder, private modal: NgbModal,
    private dossierService: DossierService, private eleveService: EleveService, private pipe: DatePipe) { }

  ngOnInit(): void {
    this.getData();
    this.searchForm = this.fb.group({
      matricule: [''],
      prenom: [''],
      nom: [''],
      promotion: [''],
      etatValidation: [''],
      cycle: [''],
      section: ['']
    });
    this.submitted = false;
    this.ipp = 10;
    this.p = 1;
    this.initializeForm();
  }

  public initializeForm() {
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
  }

  public initializeDocComplementaire() {
    this.docComplementaireForm = this.fb.group({
      idDossier: [''],

      idNationalite: [''],
      numeroNationalite: ['', Validators.required],
      courAppelNationalite: [''],
      tribunalInstanceNationalite: [''],
      presidentInstanceNationalite: [''],
      dateNationalite: [''],

      idCasier: [''],
      numeroCasier: ['', Validators.required],
      courAppelCasier: [''],
      tribunalInstanceCasier: [''],
      presidentInstanceCasier: [''],
      dateCasier: [''],

      idVisite: [''],
      medecin: ['', Validators.required],
      examensCliniques: ['', Validators.required],
      resultats: ['', Validators.required],
      lieuVisite: ['', Validators.required],
      dateVisite: ['', Validators.required],
      medecinContreVisite: ['', Validators.required],
      resultatsContreVisite: ['', Validators.required],
      dateContreVisite: ['', Validators.required],

      idEngagement: [''],
      numeroEngagement: ['', Validators.required],
      legislation: [''],
      dureeEngagement: [''],
      dateLegislation: [''],
      dateEngagement: [''],
    });
  }

  public updateForm(eleve: Eleve) {
    this.getRegions1(eleve.ville.region.pays.id.toString());
    this.getVilles1(eleve.ville.region.id.toString());
    this.editForm.patchValue({
      voieAcces: eleve.dossiers[eleve.dossiers.length - 1]?.voieAcces.id.toString(),
      cycle: eleve.eleveCycles[eleve.eleveCycles.length - 1]?.cycle.id.toString(),
      section: (eleve.eleveSections.length > 0) ? eleve.eleveSections[eleve.eleveSections.length - 1].section.id.toString() : '',
      typeEleve: eleve.typeEleve,
      matricule: eleve.matricule,
      numConcours: eleve.numDosCandidat,
      promotion: (eleve.elevePromotions.length > 0) ? eleve.elevePromotions[eleve.elevePromotions.length - 1].promotion.id.toString() : '',
      prenom: eleve.prenom,
      nom: eleve.nom,
      dateNaiss: this.pipe.transform(eleve.dateNaiss, 'yyyy-MM-dd'),
      sexe: eleve.sexe,
      nationalite: eleve.nationalite,
      nci: eleve.nci,
      pays: eleve.ville.region.pays.id.toString(),
      region: eleve.ville.region.id.toString(),
      ville: eleve.ville.id.toString(),
      lieuNaiss: eleve.lieuNaiss,
      prenomPere: eleve.prenomPere,
      prenomMere: eleve.prenomMere,
      nomMere: eleve.nomMere,
      nomPere: eleve.nomPere,
      aDakar: eleve.adresses[eleve.adresses.length - 1]?.dakar,
      horsDakar: eleve.adresses[eleve.adresses.length - 1]?.horsDakar,
      emailPrive: eleve.emailPrive,
      emailPro: eleve.emailPro,
      mobile1: eleve.telephones[eleve.telephones.length - 1]?.mobile1,
      mobile2: eleve.telephones[eleve.telephones.length - 1]?.mobile2,
      mobile3: eleve.telephones[eleve.telephones.length - 1]?.mobile3,
      domicile: eleve.telephones[eleve.telephones.length - 1]?.domicile,
      prenomUrgence: eleve.urgences[eleve.urgences.length - 1]?.prenom,
      nomUrgence: eleve.urgences[eleve.urgences.length - 1]?.nom,
      telephoneUrgence: eleve.urgences[eleve.urgences.length - 1]?.telephone,
      adresseUrgence: eleve.urgences[eleve.urgences.length - 1]?.adresse
    });
  }

  public getData() {
    this.api.findAllSection().subscribe(
      (response: Section[]) => { this.sections = response; },
      (error: HttpErrorResponse) => { console.log(error) }
    );
    this.api.findAllCycle().subscribe(
      (response: Cycle[]) => { this.cycles = response; },
      (error: HttpErrorResponse) => { console.log(error) }
    );
    this.api.findAllPromotion().subscribe(
      (response: Promotion[]) => { this.promotions = response },
      (error: HttpErrorResponse) => { console.log(error) }
    );
    this.api.findAllEtatValidation().subscribe(
      (response: EtatValidation[]) => { this.validations = response },
      (error: HttpErrorResponse) => { console.log(error) }
    );
    this.eleveService.findAll().subscribe(
      (response: Eleve[]) => { this.eleves = response; },
      (error: HttpErrorResponse) => { console.log(error); }
    );
    this.api.findAllPays().subscribe(
      (response: Pays[]) => { this.pays = response; },
      (error: HttpErrorResponse) => { console.log(error); }
    );
    this.api.findAllVoieAcces().subscribe(
      (response: VoieAcces[]) => { this.voies = response; },
      (error: HttpErrorResponse) => { console.log(error); }
    );
    this.api.findAllCorps().subscribe(
      (response: Corps[]) => { this.corps = response; console.log(response) },
      (error: HttpErrorResponse) => { console.log(error); }
    );
    this.api.findAllClasseGrade().subscribe(
      (response: ClasseGrade[]) => { this.classes = response; },
      (error: HttpErrorResponse) => { console.log(error); }
    );
    this.api.findAllStatut().subscribe(
      (response: Statut[]) => { this.statuts = response; },
      (error: HttpErrorResponse) => { console.log(error); }
    );
    this.api.findAllEchelon().subscribe(
      (response: Echelon[]) => { this.echelons = response; },
      (error: HttpErrorResponse) => { console.log(error); }
    );
    this.api.findAllHierarchie().subscribe(
      (response: Hierarchie[]) => { this.hierarchies = response; },
      (error: HttpErrorResponse) => { console.log(error); }
    );
  }

  public get f() { return this.editForm.controls; }
  
  public get fDocComplementaire() { return this.docComplementaireForm.controls; }

  public getRegions(event: any) {
    if (event.target.value != '') {
      this.api.findRegionsByPaysId(parseInt(event.target.value)).subscribe(
        (response: Region[]) => { this.regions = response; },
        (error: HttpErrorResponse) => { console.log(error); });
    }
  }

  public getRegions1(id: string) {
    if (id != '') {
      this.api.findRegionsByPaysId(parseInt(id)).subscribe(
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

  public getVilles1(id: string) {
    if (id != '') {
      this.api.findVillesByRegionId(parseInt(id)).subscribe(
        (response: Ville[]) => { this.villes = response; },
        (error: HttpErrorResponse) => { console.log(error); });
    }
  }

  public searchEleve() {
    if (this.searchForm.value.matricule == '' && this.searchForm.value.prenom == '' && this.searchForm.value.nom == '' && this.searchForm.value.promotion == '' && this.searchForm.value.section == '' && this.searchForm.value.cycle == '' && this.searchForm.value.dateNaiss == '' && this.searchForm.value.etatValidation == '') {
      this.submitted = true;
      return;
    }
    this.eleveService.findEleves(this.searchForm.value).subscribe(
      (response: Eleve[]) => { this.eleves = response; },
      (error: HttpErrorResponse) => { console.log(error); }
    );
  }

  public getIpp(nombre: string) {
    this.ipp = parseInt(nombre);
  }

  public openUpdate(content: any, eleve: Eleve) {
    this.eleve = eleve;
    this.updateForm(eleve);
    this.modal.open(content, { size: 'xl', scrollable: true });
  }

  public updateDossier() {

  }

  public addDocComplementaire() {

  }

  public getDocComplementaire(id: string) {
    
  }
}
