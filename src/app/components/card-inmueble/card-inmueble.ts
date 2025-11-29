import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { Casa } from '../../models/modelCasa';

/**
 * Componente que representa una tarjeta de inmueble con carrusel de imágenes.
 * Permite visualizar información básica de una propiedad y navegar a su detalle.
 * 
 * @example
 * ```html
 * <app-card-inmueble 
 *   [casa]="miCasa"
 *   (propiedadSeleccionada)="onPropiedadSeleccionada($event)">
 * </app-card-inmueble>
 * ```
 */
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
  
  /**
   * Propiedad inmueble que se mostrará en la tarjeta.
   * @required
   */
  @Input() casa!: Casa;
  
  /**
   * Evento que se emite cuando el usuario hace clic en "Saber más".
   * Emite la propiedad seleccionada.
   */
  @Output() propiedadSeleccionada = new EventEmitter<Casa>();
  
  /**
   * Evento que se emite cuando se cambia de imagen en el carrusel.
   * Emite el índice de la nueva imagen.
   */
  @Output() imagenCambiada = new EventEmitter<number>();
  
  /**
   * Índice de la imagen actualmente visible en el carrusel.
   * @default 0
   */
  currentImageIndex = 0;

  /**
   * Navega a la siguiente imagen del carrusel.
   * Si está en la última imagen, vuelve a la primera.
   */
  nextImage(): void {
    if (this.casa.imagenes && this.casa.imagenes.length > 0) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.casa.imagenes.length;
      this.imagenCambiada.emit(this.currentImageIndex);
    }
  }

  /**
   * Navega a la imagen anterior del carrusel.
   * Si está en la primera imagen, va a la última.
   */
  prevImage(): void {
    if (this.casa.imagenes && this.casa.imagenes.length > 0) {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.casa.imagenes.length) % this.casa.imagenes.length;
      this.imagenCambiada.emit(this.currentImageIndex);
    }
  }

  /**
   * Obtiene la URL de la imagen actual del carrusel.
   * @returns URL de la imagen actual o una imagen por defecto si no hay imágenes.
   */
  get currentImage(): string {
    return this.casa.imagenes && this.casa.imagenes.length > 0 
      ? this.casa.imagenes[this.currentImageIndex] 
      : 'assets/img/inicio1.jpeg';
  }

  /**
   * Verifica si la propiedad tiene múltiples imágenes para mostrar controles del carrusel.
   * @returns true si hay más de una imagen, false en caso contrario.
   */
  hasMultipleImages(): boolean {
    return this.casa.imagenes && this.casa.imagenes.length > 1;
  }

  /**
   * Maneja el evento de clic en el botón "Saber más".
   * Emite el evento propiedadSeleccionada con la casa actual.
   */
  onSaberMas(): void {
    this.propiedadSeleccionada.emit(this.casa);
  }
}

