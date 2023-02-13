import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutbienComponent } from './ajoutbien.component';

describe('AjoutbienComponent', () => {
  let component: AjoutbienComponent;
  let fixture: ComponentFixture<AjoutbienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutbienComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutbienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
