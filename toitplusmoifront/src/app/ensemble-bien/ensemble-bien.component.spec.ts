import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsembleBienComponent } from './ensemble-bien.component';

describe('EnsembleBienComponent', () => {
  let component: EnsembleBienComponent;
  let fixture: ComponentFixture<EnsembleBienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnsembleBienComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnsembleBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
