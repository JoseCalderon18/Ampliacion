import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardCasaComponent } from '../../components/card-casa/card-casa';
import { CasasController } from '../../../controllers/controladorCasas';
import { Casa } from '../../models/modelCasa';

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

  casas: Casa[] = [];

  constructor(private casasCtrl: CasasController) {}

  ngOnInit() {
    this.casas = this.casasCtrl.getCasas();   // ⬅️ Obtiene la lista de casas
  }

}
