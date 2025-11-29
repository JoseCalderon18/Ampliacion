import { Component, Input } from '@angular/core';
import { Casa } from '../../models/modelCasa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-casa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-casa.html',
  styleUrls: ['./card-casa.css']
})
export class CardCasaComponent {

  @Input() casa!: Casa;

}
