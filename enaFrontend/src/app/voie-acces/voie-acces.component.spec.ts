import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoieAccesComponent } from './voie-acces.component';

describe('VoieAccesComponent', () => {
  let component: VoieAccesComponent;
  let fixture: ComponentFixture<VoieAccesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoieAccesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoieAccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
