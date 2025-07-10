import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-crear-partida',
  templateUrl: './crear-partida.page.html',
  styleUrls: ['./crear-partida.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class CrearPartidaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
