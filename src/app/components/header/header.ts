import { Component, signal, ChangeDetectionStrategy, inject, OnInit, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ThemeService } from '../../services/theme.service';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2';

/**
 * Componente de encabezado de la aplicación.
 * Incluye navegación, toggle de tema oscuro/claro, y gestión de sesión de usuario.
 * 
 * @example
 * ```html
 * <app-header></app-header>
 * ```
 */
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header implements OnInit {
  private themeService = inject(ThemeService);
  private userService = inject(UserService);
  private router = inject(Router);
  
  /**
   * Indica si el menú móvil está abierto.
   * @default false
   */
  isMenuOpen = signal(false);
  
  /**
   * Signal que indica si el modo oscuro está activo.
   */
  isDarkMode = this.themeService.isDarkMode;
  
  /**
   * Signal que indica si hay una sesión de usuario activa.
   */
  isLoggedIn = signal(this.userService.isLoggedIn());
  
  /**
   * Signal con la información del usuario actual.
   */
  currentUser = signal(this.userService.getCurrentUser());

  /**
   * Inicializa el componente y configura los listeners de eventos.
   * Escucha cambios de navegación, localStorage y eventos personalizados.
   */
  ngOnInit(): void {
    // Actualizar estado cuando se navega
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateSessionState();
      });
    
    // Escuchar cambios en localStorage (cuando se inicia/cierra sesión desde otra pestaña)
    window.addEventListener('storage', () => {
      this.updateSessionState();
    });
    
    // Escuchar evento personalizado para actualizar cuando se inicia sesión en la misma pestaña
    window.addEventListener('userSessionChanged', () => {
      this.updateSessionState();
    });
    
    // Actualizar estado inicial
    this.updateSessionState();
  }

  /**
   * Actualiza el estado de sesión del usuario.
   * Actualiza los signals isLoggedIn y currentUser.
   */
  private updateSessionState(): void {
    this.isLoggedIn.set(this.userService.isLoggedIn());
    this.currentUser.set(this.userService.getCurrentUser());
  }

  /**
   * Alterna el estado del menú móvil (abrir/cerrar).
   */
  toggleMenu(): void {
    this.isMenuOpen.update(value => !value);
  }

  /**
   * Cierra el menú móvil.
   */
  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  /**
   * Alterna entre modo oscuro y modo claro.
   */
  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  /**
   * Cierra la sesión del usuario actual.
   * Muestra un diálogo de confirmación antes de cerrar sesión.
   */
  logout(): void {
    Swal.fire({
      title: '¿Cerrar sesión?',
      text: '¿Estás seguro de que deseas cerrar sesión?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, cerrar sesión',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.logout();
        this.updateSessionState();
        Swal.fire({
          icon: 'success',
          title: 'Sesión cerrada',
          text: 'Has cerrado sesión correctamente',
          timer: 1500,
          showConfirmButton: false
        }).then(() => {
          this.router.navigate(['/']);
        });
      }
    });
  }
}
