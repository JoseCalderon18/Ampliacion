import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-duenio',
  imports: [],
  templateUrl: './card-duenio.html',
  styleUrl: './card-duenio.css',
})
export class CardDuenio {

  @Input() foto!: string;
  @Input() nombre!: string;
  @Input() titulo!: string;

}
