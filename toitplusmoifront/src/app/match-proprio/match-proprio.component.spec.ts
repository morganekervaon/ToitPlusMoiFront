import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchProprioComponent } from './match-proprio.component';

describe('MatchProprioComponent', () => {
  let component: MatchProprioComponent;
  let fixture: ComponentFixture<MatchProprioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchProprioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchProprioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
