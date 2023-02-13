import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltreComponent } from './filtre.component';

describe('FiltreComponent', () => {
  let component: FiltreComponent;
  let fixture: ComponentFixture<FiltreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
