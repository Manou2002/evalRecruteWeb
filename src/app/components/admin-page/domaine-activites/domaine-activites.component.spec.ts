import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomaineActivitesComponent } from './domaine-activites.component';

describe('DomaineActivitesComponent', () => {
  let component: DomaineActivitesComponent;
  let fixture: ComponentFixture<DomaineActivitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DomaineActivitesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DomaineActivitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
