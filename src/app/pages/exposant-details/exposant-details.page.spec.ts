import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExposantDetailsPage } from './exposant-details.page';

describe('ExposantDetailsPage', () => {
  let component: ExposantDetailsPage;
  let fixture: ComponentFixture<ExposantDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ExposantDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
