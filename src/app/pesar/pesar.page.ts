// src/app/pesar/pesar.page.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pesar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pesar.page.html',
  styleUrls: ['./pesar.page.scss'],
})
export class PesarPage {
  // para el datalist provisional
  clientes = ['Cliente A', 'Cliente B', 'Cliente C'];
  cliente = '';

  constructor(private router: Router) {}

  pesar() {
    // aquí iría tu lógica de pesaje real
    console.log('Pesando para', this.cliente);
  }

  salir() {
    this.router.navigateByUrl('/dashboard');
  }
}
