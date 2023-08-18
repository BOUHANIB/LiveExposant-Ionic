import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LivreDetailsPage } from './livre-details.page';

describe('LivreDetailsPage', () => {
  let component: LivreDetailsPage;
  let fixture: ComponentFixture<LivreDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LivreDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
