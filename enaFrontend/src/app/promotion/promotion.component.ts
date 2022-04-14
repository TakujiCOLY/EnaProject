import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Promotion } from '../models/promotion';
import { ParametreService } from '../services/parametre.service';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss']
})
export class PromotionComponent implements OnInit {
  public promotions!: Promotion[];
  public searchPromotionForm!: FormGroup;
  public editPromotionForm!: FormGroup;
  public submitted!: Boolean;
  public submittedSearch!: Boolean;
  public p!: number;
  public ipp!: number;

  constructor(private api: ParametreService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.searchPromotionForm = this.fb.group({
      nom: [''],
      parrain: [''],
      active: ['']
    });
    this.editPromotionForm = this.fb.group({
      id: [''],
      nom: ['', Validators.required],
      parrain: [''],
      active: ['', Validators.required]
    });
    this.ipp = 10;
    this.p = 1;
    this.submitted = false;
    this.submittedSearch = false;
    this.getData();
  }

  public getData() {
    this.api.findAllPromotion().subscribe(
      (response: Promotion[]) => {
        this.promotions = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  public addPromotion() {
    this.submitted = true;
    if (this.editPromotionForm.invalid)
      return;
    let promotion = new Promotion();
    promotion.nom = this.editPromotionForm.value.nom;
    promotion.parrain = this.editPromotionForm.value.parrain;
    promotion.active = Boolean(parseInt(this.editPromotionForm.value.active));
    if (this.editPromotionForm.value.id == '') {
      this.api.add(promotion, '/v1/promotions/add').subscribe(
        (response: any) => {
          this.effacerChamps();
          this.getData();
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
    } else {
      promotion.id = parseInt(this.editPromotionForm.value.id);
      this.api.update(promotion, '/v1/promotions/update').subscribe(
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

  public searchPromotion() {
    if (this.searchPromotionForm.value.nom == '' && this.searchPromotionForm.value.parrain == '') {
      this.submittedSearch = true;
      return;
    }
    let promotion = new Promotion();
    promotion.nom = this.searchPromotionForm.value.nom;
    promotion.parrain = this.searchPromotionForm.value.parrain;
    if (this.searchPromotionForm.value.active != '') 
      promotion.active = Boolean(parseInt(this.searchPromotionForm.value.active));
  }

  public get f() { return this.editPromotionForm.controls; }

  public getPromotion(promotion: Promotion) {
    this.editPromotionForm.patchValue({
      id: promotion.id.toString(),
      nom: promotion.nom,
      parrain: promotion.parrain,
      active: (promotion.active == true) ? '1' : '0'
    });
  }

  public effacerChamps() {
    this.submitted = false;
    this.editPromotionForm.patchValue({
      id: '',
      nom: '',
      parrain: '',
      active: ''
    });
  }

  public effacerSearchChamps() {
    this.submittedSearch = false;
    this.searchPromotionForm.patchValue({
      nom: '',
      parrain: '',
      active: ''
    });
  }

  public getIpp(nombre: string) {
    this.ipp = parseInt(nombre);
  }

}
