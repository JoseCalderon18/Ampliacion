import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

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

  @Input() foto!: string;
  @Input() nombre!: string;
  @Input() titulo!: string;
  @Input() descripcion?: string;
  @Input() imgClass?: string;
}
