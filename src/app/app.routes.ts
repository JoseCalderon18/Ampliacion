import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { InmueblesComponent } from './pages/inmuebles/inmuebles';
import { DetalleInmuebleComponent } from './pages/detalle-inmueble/detalle-inmueble';
import { Contacto } from './pages/contacto/contacto';
import { Postventa } from './pages/postventa/postventa';
import { Historia } from './pages/historia/historia';
import { LoginRegistro } from './pages/login-registro/login-registro';
import { Privacidad } from './pages/privacidad/privacidad'; 
import { Terminos } from './pages/terminos/terminos';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'inmuebles', component: InmueblesComponent },
  { path: 'inmuebles/:id', component: DetalleInmuebleComponent },
  { path: 'contacto', component: Contacto },
  { path: 'postventa', component: Postventa },
  { path: 'historia', component: Historia },
  { path: 'login-registro', component: LoginRegistro },
  { path: 'privacidad', component: Privacidad },
  { path: 'terminos', component: Terminos },
];

