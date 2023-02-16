import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProprioComponent } from './main-proprio.component';

describe('MainProprioComponent', () => {
  let component: MainProprioComponent;
  let fixture: ComponentFixture<MainProprioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainProprioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainProprioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
