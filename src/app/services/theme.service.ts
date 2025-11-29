import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'app-theme';
  private readonly DARK_THEME = 'dark';
  private readonly LIGHT_THEME = 'light';

  // Signal para el tema actual
  isDarkMode = signal<boolean>(this.getInitialTheme());

  constructor() {
    // Aplicar tema inicial
    this.applyTheme(this.isDarkMode());
    
    // Efecto para aplicar el tema cuando cambia
    effect(() => {
      const isDark = this.isDarkMode();
      this.applyTheme(isDark);
    });
  }

  private getInitialTheme(): boolean {
    // Verificar si hay un tema guardado en localStorage
    const savedTheme = localStorage.getItem(this.THEME_KEY);
    if (savedTheme) {
      return savedTheme === this.DARK_THEME;
    }
    // Si no hay tema guardado, usar la preferencia del sistema
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  }

  toggleTheme(): void {
    this.isDarkMode.update(value => !value);
    const theme = this.isDarkMode() ? this.DARK_THEME : this.LIGHT_THEME;
    localStorage.setItem(this.THEME_KEY, theme);
  }

  private applyTheme(isDark: boolean): void {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add(this.DARK_THEME);
      html.classList.remove(this.LIGHT_THEME);
    } else {
      html.classList.add(this.LIGHT_THEME);
      html.classList.remove(this.DARK_THEME);
    }
  }
}

