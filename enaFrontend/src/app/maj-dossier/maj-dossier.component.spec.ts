import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MajDossierComponent } from './maj-dossier.component';

describe('MajDossierComponent', () => {
  let component: MajDossierComponent;
  let fixture: ComponentFixture<MajDossierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MajDossierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MajDossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
