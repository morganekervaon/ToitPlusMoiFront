import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationdossierComponent } from './modificationdossier.component';

describe('ModificationdossierComponent', () => {
  let component: ModificationdossierComponent;
  let fixture: ComponentFixture<ModificationdossierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificationdossierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificationdossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
