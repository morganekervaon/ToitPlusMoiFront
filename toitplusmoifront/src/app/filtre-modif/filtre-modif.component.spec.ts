import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltreModifComponent } from './filtre-modif.component';

describe('FiltreModifComponent', () => {
  let component: FiltreModifComponent;
  let fixture: ComponentFixture<FiltreModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltreModifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltreModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
