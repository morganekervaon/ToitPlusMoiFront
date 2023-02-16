import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutmaisonComponent } from './ajoutmaison.component';

describe('AjoutmaisonComponent', () => {
  let component: AjoutmaisonComponent;
  let fixture: ComponentFixture<AjoutmaisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutmaisonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutmaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
