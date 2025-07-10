import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { DashboardPage } from './dashboard/dashboard.page';
import { CrearPartidaPage } from './crear-partida/crear-partida.page';
import { PesarPage } from './pesar/pesar.page';

export const routes: Routes = [
  {path: '', component: HomePage,},
  { path: 'dashboard', component: DashboardPage,},
  { path: 'crear-partida', component: CrearPartidaPage },
  { path: 'pesar', component: PesarPage },

];

