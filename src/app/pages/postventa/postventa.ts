import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

/*En esta página tenemos la logica del carrusel de la sección de postventa 
En ese carrusel se encuentran diferentes testimonios que son presentados de manera interactiva y atractiva para los usuarios. 
Esos testimonios son almacenados en un array dentro del componente. Cada 5 segundos cambia el testimonio mostrado.*/ 
@Component({
  selector: 'app-postventa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './postventa.html',
  styleUrls: ['./postventa.css'],
})
export class Postventa implements OnInit {
  // Inyección del servicio de tema para gestionar el modo oscuro.

  private themeService = inject(ThemeService);
  isDarkMode = this.themeService.isDarkMode;

  // Array de testimonios con autor y texto correspondiente. Puedes agregar más testimonios si lo deseas añadiendo más objetos al array.
  testimonials = [
    {
      text: 'Gracias a esta inmobiliaria, encontramos la vivienda que buscábamos. El proceso fue fácil y transparente.',
      author: 'Juan Pérez'
    },
    {
      text: 'Excelente servicio, nos ayudaron a encontrar nuestra propiedad ideal en tiempo récord. ¡Altamente recomendados!',
      author: 'Ana Gómez'
    },
    {
      text: 'El equipo de esta inmobiliaria se encargó de todo, haciéndonos sentir cómodos en todo momento. ¡Recomendados al 100%!',
      author: 'Carlos Ruiz'
    },
    {
      text: 'Profesionales y atentos, nos guiaron durante todo el proceso de compra. Estamos muy satisfechos con su servicio.',
      author: 'Laura Martínez'
    },
    {
      text: 'Una experiencia increíble, desde la búsqueda hasta la firma del contrato. Gracias por hacer realidad nuestro sueño.',
      author: 'María López'
    },
    {
      text: 'Un servicio excepcional, siempre dispuestos a ayudar y resolver cualquier duda. ¡Recomendados!',
      author: 'Pepe Sánchez'
    },
    {
      text: 'Nos sentimos muy apoyados durante todo el proceso de compra. La atención al cliente es de primera.',
      author: 'José María González'
    },
    {
      text: 'Gracias a su profesionalismo, encontramos la casa perfecta para nuestra familia. ¡Muy agradecidos!',
      author: 'José Martínez'
    },
    {
      text: 'Un equipo comprometido y eficiente, hicieron que la compra de nuestra propiedad fuera una experiencia positiva.',
      author: 'Laura Gonzalez'
    },
    {
      text: 'Excelente atención y asesoramiento, nos ayudaron a tomar la mejor decisión para nuestra inversión inmobiliaria.',
      author: 'Luis garcía'
    },
  ];

  currentIndex = 0; // Índice del testimonio actual mostrado.

  constructor() { }

  ngOnInit(): void {
    // Cambiar de testimonio automáticamente cada 5 segundos con setInterval.
    setInterval(() => {
      this.nextTestimonial();
    }, 5000);
  }

  // Cambia al testimonio anterior mostrado.
  prevTestimonial(): void {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  // Cambia al testimonio siguiente mostrado.
  nextTestimonial(): void {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }
}
