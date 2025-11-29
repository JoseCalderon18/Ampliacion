import { Component, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

/**
 * Componente que muestra tarjetas de características en la página principal.
 * Cada tarjeta representa un servicio o característica de la inmobiliaria.
 * 
 * @example
 * ```html
 * <app-card-home 
 *   (cardSeleccionada)="onCardSeleccionada($event)">
 * </app-card-home>
 * ```
 */
@Component({
  selector: 'app-card-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-home.html',
  styleUrls: ['./card-home.css'],
})
export class CardHome {
  private themeService = inject(ThemeService);
  isDarkMode = this.themeService.isDarkMode;
  
  /**
   * Evento que se emite cuando el usuario hace clic en una tarjeta.
   * Emite el título de la tarjeta seleccionada.
   */
  @Output() cardSeleccionada = new EventEmitter<string>();
  
  /**
   * Array de tarjetas con información de características de la inmobiliaria.
   * Cada tarjeta contiene título, icono SVG y texto descriptivo.
   */
  cards = [
    { 
      title: 'Amplia Cartera de Propiedades', 
      icon: 'M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25', 
      text: 'Encuentra la propiedad perfecta entre nuestra amplia selección de casas, departamentos y terrenos.' 
    },
    { 
      title: 'Asesoría Especializada', 
      icon: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z', 
      text: 'Nuestros agentes expertos te guiarán en cada paso del proceso de compra o venta.' 
    },
    { 
      title: 'Financiamiento Asistido', 
      icon: 'M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z', 
      text: 'Te ayudamos a encontrar las mejores opciones de financiamiento para tu inversión.' 
    },
    { 
      title: 'Procesos Ágiles', 
      icon: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z', 
      text: 'Optimizamos todos los trámites para que tu experiencia sea rápida y sin complicaciones.' 
    },
    { 
      title: 'Valoraciones Precisas', 
      icon: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z', 
      text: 'Ofrecemos valoraciones de mercado precisas para garantizar el mejor precio.' 
    },
    { 
      title: 'Atención Personalizada', 
      icon: 'M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z', 
      text: 'Nos adaptamos a tus necesidades específicas para ofrecerte un servicio completamente personalizado.' 
    }
  ];

  /**
   * Maneja el evento de clic en una tarjeta.
   * Emite el evento cardSeleccionada con el título de la tarjeta.
   * @param titulo - Título de la tarjeta seleccionada
   */
  onCardClick(titulo: string): void {
    this.cardSeleccionada.emit(titulo);
  }
}