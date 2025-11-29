import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

/**
 * Componente de banner de cookies.
 * Muestra un banner informativo sobre el uso de cookies y permite al usuario aceptar o rechazar.
 * Guarda la preferencia en localStorage.
 * 
 * @example
 * ```html
 * <app-cookies></app-cookies>
 * ```
 */
@Component({
  selector: 'app-cookies',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cookies.html',
  styleUrl: './cookies.css',
})
export class Cookies implements OnInit {
  private themeService = inject(ThemeService);
  isDarkMode = this.themeService.isDarkMode;
  
  /**
   * Indica si el banner de cookies está visible.
   * Se oculta cuando el usuario acepta o rechaza las cookies.
   */
  showBanner = signal<boolean>(false);

  ngOnInit(): void {
    // Verificar si el usuario ya ha tomado una decisión sobre las cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      // Si no hay preferencia guardada, mostrar el banner
      this.showBanner.set(true);
    }
  }

  /**
   * Acepta las cookies y guarda la preferencia en localStorage.
   * Oculta el banner después de aceptar.
   */
  acceptCookies(): void {
    localStorage.setItem('cookiesAccepted', 'true');
    this.showBanner.set(false);
  }

  /**
   * Rechaza las cookies y guarda la preferencia en localStorage.
   * Oculta el banner después de rechazar.
   */
  rejectCookies(): void {
    localStorage.setItem('cookiesAccepted', 'false');
    this.showBanner.set(false);
  }
}
