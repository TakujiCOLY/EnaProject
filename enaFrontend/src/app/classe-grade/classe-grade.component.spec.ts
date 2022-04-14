import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseGradeComponent } from './classe-grade.component';

describe('ClasseGradeComponent', () => {
  let component: ClasseGradeComponent;
  let fixture: ComponentFixture<ClasseGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClasseGradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasseGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
