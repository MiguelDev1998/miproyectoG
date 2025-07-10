// src/app/services/partida.service.ts
import { Injectable } from '@angular/core';
import { Partida } from '../models/partida';

@Injectable({ providedIn: 'root' })
export class PartidaService {
  private partidas: Partida[] = [];

  grabar(p: Partida) {
    this.partidas.push(p);
  }

  listar(): Partida[] {
    return this.partidas;
  }

  borrar(p: Partida) {
    this.partidas = this.partidas.filter(x => x !== p);
  }

  cerrarTurno(p: Partida) {
    console.log('Turno cerrado:', p);
    // aquí tu lógica real
  }

  pesar(p: Partida) {
    console.log('Pesar partida:', p);
    // aquí tu lógica real (ej. navegar a pesaje)
  }
}
