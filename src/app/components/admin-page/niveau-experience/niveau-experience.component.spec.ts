import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiveauExperienceComponent } from './niveau-experience.component';

describe('NiveauExperienceComponent', () => {
  let component: NiveauExperienceComponent;
  let fixture: ComponentFixture<NiveauExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NiveauExperienceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NiveauExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
