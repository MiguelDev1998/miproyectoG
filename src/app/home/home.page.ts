import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // necesario para [(ngModel)]
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  usuario: string = '';
  contrasena: string = '';

  constructor(private router: Router,
  private authService: AuthService)
  {}

   iniciarSesion() {
    if (this.usuario === 'a' && this.contrasena === '1') {
      this.authService.login();                    // marca como logueado
      this.router.navigateByUrl('/dashboard');      // navega al dashboard
    } else {
      alert('Credenciales incorrectas');
    }
  }
}
