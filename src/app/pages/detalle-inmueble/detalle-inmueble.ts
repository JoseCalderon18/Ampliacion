import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CasasController } from '../../../controllers/controladorCasas';
import { ThemeService } from '../../services/theme.service';
import { Casa } from '../../models/modelCasa';

@Component({
  selector: 'app-detalle-inmueble',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detalle-inmueble.html',
  styleUrls: ['./detalle-inmueble.css']
})
export class DetalleInmuebleComponent implements OnInit {
  private themeService = inject(ThemeService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private casasCtrl = inject(CasasController);
  
  isDarkMode = this.themeService.isDarkMode;
  casa: Casa | undefined;
  currentImageIndex = 0;

  constructor() {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.casa = this.casasCtrl.getCasaById(id);
      if (!this.casa) {
        this.router.navigate(['/inmuebles']);
      }
    }
  }

  nextImage() {
    if (this.casa && this.casa.imagenes && this.casa.imagenes.length > 0) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.casa.imagenes.length;
    }
  }

  prevImage() {
    if (this.casa && this.casa.imagenes && this.casa.imagenes.length > 0) {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.casa.imagenes.length) % this.casa.imagenes.length;
    }
  }

  goToImage(index: number) {
    this.currentImageIndex = index;
  }

  get currentImage(): string {
    return this.casa && this.casa.imagenes && this.casa.imagenes.length > 0 
      ? this.casa.imagenes[this.currentImageIndex] 
      : 'assets/img/inicio1.jpeg';
  }
}

