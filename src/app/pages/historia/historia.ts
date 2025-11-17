import { Component } from '@angular/core';
import { CardDuenio } from '../../components/card-duenio/card-duenio';
import { Cronologia } from '../../components/cronologia/cronologia';
@Component({
  selector: 'app-historia',
  imports: [CardDuenio, Cronologia],
  templateUrl: './historia.html',
  styleUrl: './historia.css',
})
export class Historia {

}
