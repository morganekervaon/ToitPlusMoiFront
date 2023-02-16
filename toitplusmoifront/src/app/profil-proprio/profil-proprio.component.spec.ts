import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilProprioComponent } from './profil-proprio.component';

describe('ProfilProprioComponent', () => {
  let component: ProfilProprioComponent;
  let fixture: ComponentFixture<ProfilProprioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilProprioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilProprioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
