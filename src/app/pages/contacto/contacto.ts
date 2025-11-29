import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Form } from '../../components/form/form';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, Form],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
  private themeService = inject(ThemeService);
  isDarkMode = this.themeService.isDarkMode;
}
