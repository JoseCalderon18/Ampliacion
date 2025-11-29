import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmailService } from '../../services/emailService';
import { ThemeService } from '../../services/theme.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})

export class Form {
  private themeService = inject(ThemeService);
  isDarkMode = this.themeService.isDarkMode;
  
  nombre = "";
  email = "";
  asunto = "";
  mensaje = "";

  constructor(private emailService: EmailService) { } 

  enviarEmail() {
    if (!this.nombre || !this.email || !this.asunto || !this.mensaje) {
      Swal.fire({
        icon: 'warning',
        title: 'Campos incompletos',
        text: 'Por favor, completa todos los campos obligatorios.',
        confirmButtonColor: '#3085d6',
      });
      return;
    }

    
    const data = {
      nombre: this.nombre,
      email: this.email,
      asunto: this.obtenerAsusnto(this.asunto),
      mensaje: this.mensaje
    };

    this.emailService.sendEmail(data)
      .then(() => {
        // Alertq de mensaje enviado
        Swal.fire({
          icon: 'success',
          title: 'Mensaje enviado',
          text: 'Tu mensaje se ha enviado correctamente. Te responderemos pronto.',
          timer: 2000,
          showConfirmButton: false,
        });
        this.nombre = '';
        this.email = '';
        this.mensaje = '';
        this.asunto = '';
      }).catch((error) => {
        console.error('Error al enviar el mensaje:', error);
        // Alerta de error
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.',
        });
      });
  }
  private obtenerAsusnto(valor: string): string {
        switch (valor) {
            case '1' : 
                return 'Solicitar Informacion';
            case '2':      
                return 'Consulta sobre algún Inmueble';
            case '3':
                return 'Otro';
            default:
                return 'Sin asunto';
                
        }
    }
}
