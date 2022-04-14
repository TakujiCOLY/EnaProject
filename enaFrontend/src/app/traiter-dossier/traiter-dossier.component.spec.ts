import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraiterDossierComponent } from './traiter-dossier.component';

describe('TraiterDossierComponent', () => {
  let component: TraiterDossierComponent;
  let fixture: ComponentFixture<TraiterDossierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraiterDossierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraiterDossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
