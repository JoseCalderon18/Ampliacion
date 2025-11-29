import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-terminos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './terminos.html',
  styleUrl: './terminos.css',
})
export class Terminos {
  private themeService = inject(ThemeService);
  isDarkMode = this.themeService.isDarkMode;
}
