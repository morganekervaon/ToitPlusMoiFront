import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheAppartComponent } from './recherche-appart.component';

describe('RechercheAppartComponent', () => {
  let component: RechercheAppartComponent;
  let fixture: ComponentFixture<RechercheAppartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheAppartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercheAppartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
