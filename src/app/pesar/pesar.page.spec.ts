import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PesarPage } from './pesar.page';

describe('PesarPage', () => {
  let component: PesarPage;
  let fixture: ComponentFixture<PesarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PesarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
