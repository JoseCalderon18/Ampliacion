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
  showFull = false;
  imagenActual = 0;

anteriorImagen() {
  if (this.imagenActual === 0) {
    this.imagenActual = this.casa.imagenes.length - 1;
  } else {
    this.imagenActual--;
  }
}

siguienteImagen() {
  if (this.imagenActual === this.casa.imagenes.length - 1) {
    this.imagenActual = 0;
  } else {
    this.imagenActual++;
  }
}

}
