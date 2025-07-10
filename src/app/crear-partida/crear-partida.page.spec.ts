import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearPartidaPage } from './crear-partida.page';

describe('CrearPartidaPage', () => {
  let component: CrearPartidaPage;
  let fixture: ComponentFixture<CrearPartidaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPartidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
