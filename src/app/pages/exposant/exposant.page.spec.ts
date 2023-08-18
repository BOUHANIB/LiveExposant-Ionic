import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExposantPage } from './exposant.page';

describe('ExposantPage', () => {
  let component: ExposantPage;
  let fixture: ComponentFixture<ExposantPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ExposantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
