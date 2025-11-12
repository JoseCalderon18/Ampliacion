import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Inmuebles } from './pages/inmuebles/inmuebles';
import { Contacto } from './pages/contacto/contacto';
import { Postventa } from './pages/postventa/postventa';
import { Historia } from './pages/historia/historia';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'inmuebles', component: Inmuebles },
  { path: 'contacto', component: Contacto },
  { path: 'postventa', component: Postventa },
  { path: 'historia', component: Historia },
];

