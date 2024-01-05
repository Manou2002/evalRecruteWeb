import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiveauEtudesComponent } from './niveau-etudes.component';

describe('NiveauEtudesComponent', () => {
  let component: NiveauEtudesComponent;
  let fixture: ComponentFixture<NiveauEtudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NiveauEtudesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NiveauEtudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
