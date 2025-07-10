import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  menuAbierto = false;
  menuVisible = false;


  constructor(private router: Router,
    private authService: AuthService
  ) {
    // se suscribe a los cambios de login
    this.authService.isLoggedIn$.subscribe(flag => {
      this.menuVisible = flag;
    });
 }

  abrirMenu()   { this.menuAbierto = true; }
  cerrarMenu()  { this.menuAbierto = false; }
  navegar(ruta: string) {
    this.cerrarMenu();
    this.router.navigateByUrl(ruta);
  }

cerrarSesion() {
    this.cerrarMenu();
    this.authService.logout();
    this.router.navigateByUrl('/');
  }
}
