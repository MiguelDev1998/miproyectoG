import { Component,} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PartidaService } from '../services/partida.service';
import { Partida } from '../models/partida';

@Component({
  selector: 'app-crear-partida',
  templateUrl: './crear-partida.page.html',
  styleUrls: ['./crear-partida.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class CrearPartidaPage {
  // Propiedades enlazadas al formulario
  partida = '';
  origen = '';
  bache = 1;
  producto = '';
  proceso = '';
  responsable = '';
  fecha: string = new Date().toISOString().split('T')[0]; // "YYYY-MM-DD"

  constructor(
    private partidaSvc: PartidaService,
    private router: Router
  ) {}

  grabar() {
    // Validación mínima
    if (!this.partida || !this.origen || !this.responsable) {
      alert('Por favor, completa todos los campos obligatorios.');
      return;

      
    }

    const nueva: Partida = {
      partida: this.partida,
      origen: this.origen,
      bache: this.bache,
      producto: this.producto,
      proceso: this.proceso,
      responsable: this.responsable,
      fecha: this.fecha,
    };

    this.partidaSvc.grabar(nueva);
    alert('Partida creada con éxito.');

    // Opcional: volver al dashboard
    this.router.navigateByUrl('/dashboard');
  }

  limpiar() {
    this.partida = '';
    this.origen = '';
    this.bache = 1;
    this.producto = '';
    this.proceso = '';
    this.responsable = '';
  }
}
