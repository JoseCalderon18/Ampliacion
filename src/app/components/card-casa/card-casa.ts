import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-casa',
  imports: [],
  templateUrl: './card-casa.html',
  styleUrl: './card-casa.css',
})
export class CardCasa {
  @Input() foto!: string;
  @Input() titulo!: string;
  @Input() ubicacion!: string;
  @Input() precio!: string;
  @Input() descripcion!: string;
}
