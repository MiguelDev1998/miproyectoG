import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  // Aquí va solo la lógica específica de Dashboard,
  // si necesitas navegar desde dentro de esta página
  // puedes inyectar Router, pero normalmente
  // todo pasa por AppComponent.
}
