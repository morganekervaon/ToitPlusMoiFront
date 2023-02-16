import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheLocataireComponent } from './recherche-locataire.component';

describe('RechercheLocataireComponent', () => {
  let component: RechercheLocataireComponent;
  let fixture: ComponentFixture<RechercheLocataireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheLocataireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercheLocataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
