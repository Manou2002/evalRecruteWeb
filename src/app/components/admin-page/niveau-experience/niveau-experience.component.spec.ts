import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiveauExperiencesComponent } from './niveau-experience.component';

describe('NiveauExperienceComponent', () => {
  let component: NiveauExperiencesComponent;
  let fixture: ComponentFixture<NiveauExperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NiveauExperiencesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NiveauExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
