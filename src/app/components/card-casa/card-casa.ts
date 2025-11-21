import { Component, Input } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-casa',
  imports: [],
  templateUrl: './card-casa.html',
  styleUrl: './card-casa.css',
})
export class CardCasa {
  @Input() foto!: string;
  @Input() titulo!: string;
  @Input() ubicacion!: string;
  @Input() precio!: string;
  @Input() descripcion!: string;

  maximizar() {
    Swal.fire({
    text: `${this.descripcion}`,
    imageUrl: `${this.foto}`,
    imageWidth: 400,
    imageAlt: 'Imagen del inmueble',
    html: `
      <h2 style="font-size: 22px; font-weight: bold;">🏡 ${this.titulo}</h2>
      <br>
      <p>📍 <strong>${this.ubicacion}</strong></p>
      <p style="color:#1e4dd8; font-size: 22px; font-weight: bold;">${this.precio}</p>
      <p style="text-align:left; font-size: 14px; color: #444; margin-top:10px;">
        ${this.descripcion}        
      </p>
    `,
    confirmButtonText: 'Cerrar',
    confirmButtonColor: '#2563eb'
  });
  }
}
