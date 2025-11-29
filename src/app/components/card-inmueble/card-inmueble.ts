import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { Casa } from '../../models/modelCasa';

@Component({
  selector: 'app-card-inmueble',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './card-inmueble.html',
  styleUrls: ['./card-inmueble.css']
})
export class CardInmuebleComponent {
  private themeService = inject(ThemeService);
  isDarkMode = this.themeService.isDarkMode;
  
  @Input() casa!: Casa;
  currentImageIndex = 0;

  nextImage() {
    if (this.casa.imagenes && this.casa.imagenes.length > 0) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.casa.imagenes.length;
    }
  }

  prevImage() {
    if (this.casa.imagenes && this.casa.imagenes.length > 0) {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.casa.imagenes.length) % this.casa.imagenes.length;
    }
  }

  get currentImage(): string {
    return this.casa.imagenes && this.casa.imagenes.length > 0 
      ? this.casa.imagenes[this.currentImageIndex] 
      : 'assets/img/inicio1.jpeg';
  }

  hasMultipleImages(): boolean {
    return this.casa.imagenes && this.casa.imagenes.length > 1;
  }
}

