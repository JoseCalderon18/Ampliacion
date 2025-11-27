import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardCasaComponent } from '../../components/card-casa/card-casa';
import { InmuebleControlador } from '../../../controllers/inmuebleControlador';
import { Inmueble } from '../../models/inmuebleModelo';

@Component({
  selector: 'app-inmuebles',
  standalone: true,
  imports: [
    CommonModule,      // necesario para *ngFor
    CardCasaComponent  // necesario para <app-card-casa>
  ],
  templateUrl: './inmuebles.html',
  styleUrls: ['./inmuebles.css']
})
export class InmueblesComponent implements OnInit {

  casas: Inmueble[] = [];

  constructor(private inmuebleCtrl: InmuebleControlador) {}

  ngOnInit() {
    this.casas= this.inmuebleCtrl.getInmuebles();   // ⬅️ Obtiene la lista de casas
  }

}
