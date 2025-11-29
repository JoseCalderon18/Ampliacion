import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-privacidad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacidad.html',
  styleUrl: './privacidad.css',
})
export class Privacidad {
  private themeService = inject(ThemeService);
  isDarkMode = this.themeService.isDarkMode;
}
