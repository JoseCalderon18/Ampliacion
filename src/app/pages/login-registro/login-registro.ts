import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2';
import AOS from 'aos';

@Component({
  selector: 'app-login-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-registro.html',
  styleUrl: './login-registro.css',
})
export class LoginRegistro implements OnInit {
  private themeService = inject(ThemeService);
  private userService = inject(UserService);
  private router = inject(Router);
  isDarkMode = this.themeService.isDarkMode;
  
  mostrarLogin: boolean = true;
  mostrarRegistro: boolean = false;

  // Variables para Login
  loginEmail: string = '';
  loginPassword: string = '';
  rememberMe: boolean = false;

  // Variables para Registro
  registroNombre: string = '';
  registroApellido: string = '';
  registroEmail: string = '';
  registroTelefono: string = '';
  registroPassword: string = '';

  // Mensajes de error
  loginError: string = '';
  registroError: string = '';

  ngOnInit(): void {
    // Inicializar AOS
    AOS.init({
      duration: 800,
      once: false,
      mirror: true
    });
  }

  cambiarARegistro(): void {
    this.mostrarLogin = false;
    this.loginError = '';
    setTimeout(() => {
      this.mostrarRegistro = true;
      AOS.refresh();
    }, 100);
  }

  cambiarALogin(): void {
    this.mostrarRegistro = false;
    this.registroError = '';
    setTimeout(() => {
      this.mostrarLogin = true;
      AOS.refresh();
    }, 100);
  }

  // Método de login
  onLogin(): void {
    this.loginError = '';

    // Validaciones
    if (!this.loginEmail || !this.loginPassword) {
      this.loginError = 'Por favor, completa todos los campos';
      Swal.fire({
        icon: 'warning',
        title: 'Campos incompletos',
        text: 'Por favor, completa todos los campos',
        confirmButtonColor: '#3085d6',
      });
      return;
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.loginEmail)) {
      this.loginError = 'Email no válido';
      Swal.fire({
        icon: 'error',
        title: 'Email inválido',
        text: 'Por favor, ingresa un email válido',
        confirmButtonColor: '#3085d6',
      });
      return;
    }

    // Intentar login
    const result = this.userService.login(this.loginEmail, this.loginPassword);

    if (result.success) {
      // Disparar evento personalizado para actualizar el header
      window.dispatchEvent(new Event('userSessionChanged'));
      
      Swal.fire({
        icon: 'success',
        title: '¡Bienvenido!',
        text: `Hola ${result.user?.nombre}, has iniciado sesión correctamente`,
        timer: 2000,
        showConfirmButton: false,
      }).then(() => {
        // Redirigir a home o dashboard
        this.router.navigate(['/']);
      });
    } else {
      this.loginError = result.message || 'Error al iniciar sesión';
      Swal.fire({
        icon: 'error',
        title: 'Error de inicio de sesión',
        text: result.message || 'Email o contraseña incorrectos',
        confirmButtonColor: '#3085d6',
      });
    }
  }

  // Método de registro
  onRegistro(): void {
    this.registroError = '';

    // Validaciones
    if (!this.registroNombre || !this.registroApellido || !this.registroEmail || !this.registroTelefono || !this.registroPassword) {
      this.registroError = 'Por favor, completa todos los campos';
      Swal.fire({
        icon: 'warning',
        title: 'Campos incompletos',
        text: 'Por favor, completa todos los campos obligatorios',
        confirmButtonColor: '#3085d6',
      });
      return;
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.registroEmail)) {
      this.registroError = 'Email no válido';
      Swal.fire({
        icon: 'error',
        title: 'Email inválido',
        text: 'Por favor, ingresa un email válido',
        confirmButtonColor: '#3085d6',
      });
      return;
    }

    // Validar contraseña
    if (this.registroPassword.length < 6) {
      this.registroError = 'La contraseña debe tener al menos 6 caracteres';
      Swal.fire({
        icon: 'error',
        title: 'Contraseña inválida',
        text: 'La contraseña debe tener al menos 6 caracteres',
        confirmButtonColor: '#3085d6',
      });
      return;
    }

    // Intentar registro
    const result = this.userService.register(
      this.registroNombre,
      this.registroApellido,
      this.registroEmail,
      this.registroTelefono,
      this.registroPassword
    );

    if (result.success) {
      Swal.fire({
        icon: 'success',
        title: '¡Registro exitoso!',
        text: 'Tu cuenta ha sido creada correctamente. Ahora puedes iniciar sesión.',
        confirmButtonColor: '#3085d6',
      }).then(() => {
        // Limpiar formulario y cambiar a login
        this.registroNombre = '';
        this.registroApellido = '';
        this.registroEmail = '';
        this.registroTelefono = '';
        this.registroPassword = '';
        this.cambiarALogin();
      });
    } else {
      this.registroError = result.message || 'Error al registrar';
      Swal.fire({
        icon: 'error',
        title: 'Error de registro',
        text: result.message || 'Hubo un error al crear tu cuenta',
        confirmButtonColor: '#3085d6',
      });
    }
  }
}