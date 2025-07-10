import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartidaService } from '../services/partida.service';
import { Partida } from '../models/partida';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  providers: [DatePipe] // Proveer DatePipe si se usa en el template
})
export class DashboardPage implements OnInit {
  partidas: Partida[] = [];

  constructor(private partidaSvc: PartidaService,
              private router: Router
  ) {}
  
  ngOnInit() {
    this.partidas = this.partidaSvc.listar();
  }

  borrarPartida(p: Partida) {
    this.partidaSvc.borrar(p);
    this.partidas = this.partidaSvc.listar();
  }

  cerrarTurno(p: Partida) {
    this.partidaSvc.cerrarTurno(p);
    // Opcional: refrescar lista, navegar, etc.
  }
  

  pesarPartida(p: Partida) {
    // guarda p si lo necesitas en un servicio
    this.router.navigateByUrl('/pesar');}
}
