import { Component, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmailService } from '../../services/emailService';
import { ThemeService } from '../../services/theme.service';
import Swal from 'sweetalert2';

/**
 * Componente de formulario de contacto.
 * Permite a los usuarios enviar mensajes a través de EmailJS.
 * 
 * @example
 * ```html
 * <app-form 
 *   (emailEnviado)="onEmailEnviado($event)"
 *   (errorEnvio)="onErrorEnvio($event)">
 * </app-form>
 * ```
 */
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
  
  /**
   * Evento que se emite cuando el email se envía correctamente.
   * Emite true si el envío fue exitoso.
   */
  @Output() emailEnviado = new EventEmitter<boolean>();
  
  /**
   * Evento que se emite cuando ocurre un error al enviar el email.
   * Emite el mensaje de error.
   */
  @Output() errorEnvio = new EventEmitter<string>();
  
  nombre = "";
  email = "";
  asunto = "";
  mensaje = "";

  constructor(private emailService: EmailService) { } 

  /**
   * Valida y envía el formulario de contacto.
   * Muestra alertas de éxito o error y emite eventos correspondientes.
   */
  enviarEmail(): void {
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
        // Alerta de mensaje enviado
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
        this.emailEnviado.emit(true);
      }).catch((error) => {
        console.error('Error al enviar el mensaje:', error);
        const errorMessage = 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.';
        // Alerta de error
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: errorMessage,
        });
        this.errorEnvio.emit(errorMessage);
      });
  }
  
  /**
   * Convierte el valor numérico del asunto a su descripción textual.
   * @param valor - Valor numérico del asunto ('1', '2', '3')
   * @returns Descripción textual del asunto
   */
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
