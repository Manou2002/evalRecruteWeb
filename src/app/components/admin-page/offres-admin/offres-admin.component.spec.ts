import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffresAdminComponent } from './offres-admin.component';

describe('OffreAdminComponent', () => {
  let component: OffresAdminComponent;
  let fixture: ComponentFixture<OffresAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OffresAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OffresAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
