import { Component } from '@angular/core';
import { CardDuenio } from '../../Components/card-duenio/card-duenio';
import { Cronologia } from '../../Components/cronologia/cronologia';
@Component({
  selector: 'app-historia',
  imports: [CardDuenio, Cronologia],
  templateUrl: './historia.html',
  styleUrl: './historia.css',
})
export class Historia {

}
