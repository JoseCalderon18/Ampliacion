import { Component, signal, ChangeDetectionStrategy, inject, OnInit, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ThemeService } from '../../services/theme.service';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2';

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
  isMenuOpen = signal(false);
  isDarkMode = this.themeService.isDarkMode;
  
  // Signal para verificar si hay sesión activa
  isLoggedIn = signal(this.userService.isLoggedIn());
  currentUser = signal(this.userService.getCurrentUser());

  ngOnInit() {
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

  private updateSessionState() {
    this.isLoggedIn.set(this.userService.isLoggedIn());
    this.currentUser.set(this.userService.getCurrentUser());
  }

  toggleMenu() {
    this.isMenuOpen.update(value => !value);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  logout() {
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
