import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

/**
 * Componente que muestra una tarjeta con información de un fundador o dueño.
 * Muestra foto, nombre, título y descripción opcional.
 * 
 * @example
 * ```html
 * <app-card-duenio 
 *   [foto]="'assets/img/fundador.jpg'"
 *   [nombre]="'Juan Pérez'"
 *   [titulo]="'Fundador'"
 *   [descripcion]="'Descripción del fundador'">
 * </app-card-duenio>
 * ```
 */
@Component({
  selector: 'app-card-duenio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-duenio.html',
  styleUrl: './card-duenio.css',
})
export class CardDuenio {
  private themeService = inject(ThemeService);
  isDarkMode = this.themeService.isDarkMode;

  /**
   * URL de la foto del fundador/dueño.
   * @required
   */
  @Input() foto!: string;
  
  /**
   * Nombre completo del fundador/dueño.
   * @required
   */
  @Input() nombre!: string;
  
  /**
   * Título o cargo del fundador/dueño (ej: "Fundador", "CEO").
   * @required
   */
  @Input() titulo!: string;
  
  /**
   * Descripción opcional del fundador/dueño.
   * @optional
   */
  @Input() descripcion?: string;
  
  /**
   * Clases CSS opcionales para personalizar la imagen.
   * @optional
   */
  @Input() imgClass?: string;
}
