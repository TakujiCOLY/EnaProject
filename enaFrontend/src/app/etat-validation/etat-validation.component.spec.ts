import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatValidationComponent } from './etat-validation.component';

describe('EtatValidationComponent', () => {
  let component: EtatValidationComponent;
  let fixture: ComponentFixture<EtatValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtatValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
