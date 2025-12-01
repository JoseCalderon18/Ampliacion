// IMPORTACIONES ANGULAR Y DEPENDENCIAS
import { Component, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmailService } from '../../services/emailService';
import { ThemeService } from '../../services/theme.service';
import Swal from 'sweetalert2';

/**
 * Componente de formulario de contacto.
 * Permite a los usuarios enviar mensajes a través de EmailJS. En este archivo se encuentra la logica.
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
  // selector: Nombre de la etiqueta para usar el componente en HTML
  standalone: true,
  // standalone: true => No requiere declaración en un NgModule
  imports: [CommonModule, FormsModule],
  // imports: Módulos necesarios para directivas y formularios
  templateUrl: './form.html',
  // templateUrl: Ruta al HTML asociado
  styleUrl: './form.css',
  // styleUrl: Ruta al CSS asociado
})

export class Form {
  // INYECCIÓN DE SERVICIOS
  private themeService = inject(ThemeService);
  // themeService: Permite consultar el modo actual (oscuro/claro)
  isDarkMode = this.themeService.isDarkMode;
  // isDarkMode: Referencia a función/observable para usar en [ngClass] en el template
  
  /**
   * Evento que se emite cuando el email se envía correctamente.
   * Emite true si el envío fue exitoso.
   * Permite comunicación hijo→padre (output binding)
   */
  @Output() emailEnviado = new EventEmitter<boolean>();
  
  /**
   * Evento que se emite cuando ocurre un error al enviar el email.
   * Emite el mensaje de error.
   * Permite comunicación hijo→padre (output binding)
   */
  @Output() errorEnvio = new EventEmitter<string>();
  
  // ========== MODELO DE DATOS DEL FORMULARIO ==========
  nombre = "";   // [(ngModel)]="nombre" en input nombre
  email = "";    // [(ngModel)]="email" en input email
  asunto = "";   // [(ngModel)]="asunto" en select o input asunto
  mensaje = "";  // [(ngModel)]="mensaje" en textarea

  // INYECCIÓN DE SERVICIO DE EMAIL
  constructor(private emailService: EmailService) { } 

  /**
   * Valida y envía el formulario de contacto.
   * Muestra alertas de éxito o error y emite eventos correspondientes.
   * Lógica:
   * 1. Valida que todos los campos estén completos.
   * 2. Construye el objeto data con los valores del formulario.
   * 3. Llama a emailService.sendEmail(data) (puede ser promesa o observable).
   * 4. Si éxito: muestra alerta, limpia campos, emite emailEnviado(true).
   * 5. Si error: muestra alerta, emite errorEnvio con mensaje.
   */
  enviarEmail(): void {
    // Validación de campos obligatorios
    if (!this.nombre || !this.email || !this.asunto || !this.mensaje) {
      Swal.fire({
        icon: 'warning',
        title: 'Campos incompletos',
        text: 'Por favor, completa todos los campos obligatorios.',
        confirmButtonColor: '#3085d6',
      });
      return;
    }

    // Construcción del objeto de datos para el servicio
    const data = {
      nombre: this.nombre,
      email: this.email,
      asunto: this.obtenerAsusnto(this.asunto), // Traduce el valor del asunto
      mensaje: this.mensaje
    };

    // Llamada al servicio de email (puede ser integración con EmailJS, SMTP, etc.)
    this.emailService.sendEmail(data)
      .then(() => {
        // Alerta de mensaje enviado correctamente
        Swal.fire({
          icon: 'success',
          title: 'Mensaje enviado',
          text: 'Tu mensaje se ha enviado correctamente. Te responderemos pronto.',
          timer: 2000,
          showConfirmButton: false,
        });
        // Limpia los campos del formulario (UX)
        this.nombre = '';
        this.email = '';
        this.mensaje = '';
        this.asunto = '';
        // Emite evento de éxito al padre
        this.emailEnviado.emit(true);
      }).catch((error) => {
        // Manejo de error en el envío
        console.error('Error al enviar el mensaje:', error);
        const errorMessage = 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.';
        // Alerta de error
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: errorMessage,
        });
        // Emite evento de error al padre
        this.errorEnvio.emit(errorMessage);
      });
  }
  
  /**
   * Convierte el valor numérico del asunto a su descripción textual.
   * @param valor - Valor numérico del asunto ('1', '2', '3')
   * @returns Descripción textual del asunto
   * Permite mostrar un select con valores numéricos y traducirlos a texto legible.
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
