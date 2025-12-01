/*En esta página de login y registro, los usuarios pueden acceder a sus cuentas existentes o crear nuevas cuentas. 
Esta funcionalidad se divide en dos secciones principales: login y registro. 
En el login se permite a los usuarios existentes ingresar a su cuenta, mientras que en el registro se les permite crear una nueva cuenta.
Aquí esta la logina del login realizada con typescript*/

// IMPORTACIONES: Librerías Core de Angular y dependencias
import { Component, OnInit, inject } from '@angular/core';
// Component: Decorador base para crear componentes Angular
// OnInit: Hook del ciclo de vida (ejecuta ngOnInit después de inicializar componente)
// inject: Función de inyección de dependencias (alternativa a constructor)

import { CommonModule } from '@angular/common';
// CommonModule: Proporciona directivas comunes (*ngIf, *ngFor, etc.)

import { FormsModule } from '@angular/forms';
// FormsModule: Proporciona [(ngModel)] para two-way binding en formularios

import { Router } from '@angular/router';
// Router: Servicio para navegación programática entre rutas

import { ThemeService } from '../../services/theme.service';
import { UserService } from '../../services/user.service';
// ThemeService: Servicio para gestionar modo oscuro/claro
// UserService: Servicio para login/registro (lógica de autenticación)

import Swal from 'sweetalert2';
// SweetAlert2: Librería para mostrar alertas elegantes (modales personalizadas)

import AOS from 'aos';
// AOS (Animate On Scroll): Librería para animar elementos cuando entran en viewport

// DECORADOR @Component: Define metadatos del componente
@Component({
  selector: 'app-login-registro',
  // selector: Tag HTML para usar este componente (<app-login-registro></app-login-registro>)
  
  standalone: true,
  // standalone: true => Componente self-contained (no necesita NgModule)
  // Forma moderna de Angular 17+ (sin dependencias de módulos)
  
  imports: [CommonModule, FormsModule],
  // imports: Array de módulos necesarios (directivas + formularios)
  
  templateUrl: './login-registro.html',
  // templateUrl: Ruta al archivo HTML (separación de concerns)
  
  styleUrl: './login-registro.css',
  // styleUrl: Ruta al archivo CSS (encapsulación de estilos)
})
export class LoginRegistro implements OnInit {
  // INYECCIÓN DE DEPENDENCIAS: Usar inject() en lugar de constructor (Angular 14+)
  // inject() es más conciso y legible que private service: Service en constructor
  
  private themeService = inject(ThemeService);
  // themeService: Instancia singleton del servicio de tema
  // private: Solo accesible dentro de la clase
  
  private userService = inject(UserService);
  // userService: Instancia singleton del servicio de usuario
  // Gestiona login/registro en el modelo de datos (localStorage/backend)
  
  private router = inject(Router);
  // router: Instancia singleton del Router de Angular
  // Usado para navigate(['/']) -> redirigir a home tras login exitoso
  
  isDarkMode = this.themeService.isDarkMode;
  // isDarkMode: Referencia a función del ThemeService (signal/observable)
  // Usada en template con [ngClass] para tema dinámico
  
  // ============ VARIABLES DE CONTROL DE VISTAS ============
  mostrarLogin: boolean = true;
  // mostrarLogin: Flag para renderizar panel LOGIN (@if mostrarLogin)
  // Iniciada en true => formulario login visible por defecto
  
  mostrarRegistro: boolean = false;
  // mostrarRegistro: Flag para renderizar panel REGISTRO (@if mostrarRegistro)
  // Mutuamente excluyente con mostrarLogin
  
  // ============ VARIABLES PARA FORMULARIO LOGIN ============
  loginEmail: string = '';
  // loginEmail: Vinculación bidireccional [(ngModel)]="loginEmail"
  // Almacena valor del campo email en formulario login
  
  loginPassword: string = '';
  // loginPassword: Vinculación bidireccional [(ngModel)]="loginPassword"
  // Almacena valor del campo password (type="password")
  
  rememberMe: boolean = false;
  // rememberMe: Checkbox "Recuérdame" vinculado [(ngModel)]="rememberMe"
  // Podría persistir credenciales (no implementado actualmente)
  
  // ============ VARIABLES PARA FORMULARIO REGISTRO ============
  registroNombre: string = '';
  // registroNombre: Campo nombre en formulario registro
  // [(ngModel)]="registroNombre" (two-way binding)
  
  registroApellido: string = '';
  // registroApellido: Campo apellido en formulario registro
  
  registroEmail: string = '';
  // registroEmail: Campo email en registro
  // Validación: regex email + HTML5 type="email"
  
  registroTelefono: string = '';
  // registroTelefono: Campo teléfono en registro
  // type="tel" en HTML => valida formato de teléfono
  
  registroPassword: string = '';
  // registroPassword: Campo contraseña en registro
  // Validación mínimo: 6 caracteres
  
  // ============ MENSAJES DE ERROR ============
  loginError: string = '';
  // loginError: Almacena mensaje error login
  // Mostrado en template con @if (loginError)
  // Se limpia al cambiar entre formularios
  
  registroError: string = '';
  // registroError: Almacena mensaje error registro
  // Mostrado en template con @if (registroError)

  // ============ CICLO DE VIDA ANGULAR ============
  ngOnInit(): void {
    // ngOnInit: Hook del ciclo de vida ejecutado una sola vez después de:
    // 1. Crear la instancia del componente
    // 2. Inyectar dependencias
    // 3. Inicializar propiedades
    
    // Inicializar AOS (Animate On Scroll)
    AOS.init({
      duration: 800,
      // duration: Duración en milisegundos de cada animación (800ms)
      
      once: false,
      // once: false => Animar cada vez que elemento entra en viewport
      // (no solo la primera vez)
      
      mirror: true
      // mirror: true => Animar también al salir del viewport (reverso)
    });
    // AOS.init() configura la librería ANTES de que RefreshChange detect
    // Los atributos data-aos en HTML se activan automáticamente
  }

  // ============ MÉTODOS DE NAVEGACIÓN ENTRE FORMULARIOS ============
  cambiarARegistro(): void {
    // cambiarARegistro: Event handler para botón "¿No tienes cuenta? Regístrate"
    // (click)="cambiarARegistro()" en template
    
    this.mostrarLogin = false;
    // Oculta panel login inmediatamente
    // @if (mostrarLogin) no renderiza el div en template
    
    this.loginError = '';
    // Limpia error anterior (evita mostrar error login en registro)
    
    setTimeout(() => {
      // setTimeout con 100ms: Permite que Angular termine la detección de cambios
      // y renderice el cambio de mostrarLogin ANTES de mostrar registro
      
      this.mostrarRegistro = true;
      // Muestra panel registro después del delay
      
      AOS.refresh();
      // AOS.refresh() rescandea elementos con data-aos
      // Necesario porque nuevos elementos se agregaron al DOM
      
    }, 100);
  }

  cambiarALogin(): void {
    // cambiarALogin: Event handler para botón "¿Ya tienes cuenta? Inicia Sesión"
    // (click)="cambiarALogin()" en template
    // Simétrico a cambiarARegistro()
    
    this.mostrarRegistro = false;
    // Oculta panel registro
    
    this.registroError = '';
    // Limpia error anterior de registro
    
    setTimeout(() => {
      // Delay 100ms por misma razón que cambiarARegistro()
      
      this.mostrarLogin = true;
      // Muestra panel login
      
      AOS.refresh();
      // Rescandea elementos AOS en el nuevo DOM
      
    }, 100);
  }

  // ============ LÓGICA DE AUTENTICACIÓN ============
  // Método de login
  onLogin(): void {
    // onLogin: Event handler para (ngSubmit)="onLogin()" en formulario login
    // Ejecutado cuando usuario hace submit del formulario (enter o click botón)
    
    this.loginError = '';
    // Limpiar errores previos (permite reintentos)

    // ========== VALIDACIÓN 1: CAMPOS VACÍOS ==========
    if (!this.loginEmail || !this.loginPassword) {
      // Verifica que email Y password no estén vacíos
      // ! operator: Negación lógica (true si string vacío)
      
      this.loginError = 'Por favor, completa todos los campos';
      // Asigna mensaje de error a propiedad (mostrado en template @if)
      
      Swal.fire({
        // SweetAlert2: Modal popup elegante (mejor UX que alert())
        
        icon: 'warning',
        // icon: Tipo de alerta (warning = triángulo amarillo)
        
        title: 'Campos incompletos',
        // title: Encabezado del modal
        
        text: 'Por favor, completa todos los campos',
        // text: Cuerpo del mensaje
        
        confirmButtonColor: '#3085d6',
        // confirmButtonColor: Personaliza color del botón (azul)
      });
      return;
      // return: Detiene ejecución (no continúa a validación email)
    }

    // ========== VALIDACIÓN 2: FORMATO EMAIL ==========
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // emailRegex: Expresión regular que valida formato email
    // ^[^\s@]+: Comienza con caracteres (no espacios ni @)
    // @[^\s@]+\.: Contiene @ seguido de nombre dominio + punto
    // [^\s@]+$: Termina con extensión (TLD como .com, .es)
    
    if (!emailRegex.test(this.loginEmail)) {
      // .test(): Método regex que retorna true/false si coincide
      
      this.loginError = 'Email no válido';
      Swal.fire({
        icon: 'error',
        title: 'Email inválido',
        text: 'Por favor, ingresa un email válido',
        confirmButtonColor: '#3085d6',
      });
      return;
    }

    // ========== LLAMADA AL SERVICIO ==========
    const result = this.userService.login(this.loginEmail, this.loginPassword);
    // userService.login(): Método del servicio que:
    // 1. Busca usuario en localStorage (mock backend)
    // 2. Retorna {success: boolean, user?: User, message?: string}
    // result: Almacena respuesta de la autenticación

    // ========== MANEJO DE ÉXITO/ERROR ==========
    if (result.success) {
      // Login exitoso
      
      // Disparar evento personalizado para actualizar el header
      window.dispatchEvent(new Event('userSessionChanged'));
      // window.dispatchEvent: Envía evento custom al window
      // Header se suscribe a este evento para actualizar UI
      // (muestra nombre usuario, botón logout, etc.)
      
      Swal.fire({
        icon: 'success',
        title: '¡Bienvenido!',
        text: `Hola ${result.user?.nombre}, has iniciado sesión correctamente`,
        // Template string `${...}`: Interpola nombre del usuario
        // result.user?.nombre: Optional chaining (?.) = seguro si user es null
        
        timer: 2000,
        // timer: Auto-cierra modal después de 2000ms
        
        showConfirmButton: false,
        // showConfirmButton: Oculta botón (cierre automático)
      }).then(() => {
        // .then(): Promise callback después de que modal se cierre
        
        // Redirigir a home o dashboard
        this.router.navigate(['/']);
        // router.navigate(): Navega a ruta raíz (home)
        // ['/'] es la ruta index
      });
    } else {
      // Login fallido
      
      this.loginError = result.message || 'Error al iniciar sesión';
      // result.message: Error específico del servidor/servicio
      // || 'Error...' fallback si no hay mensaje
      
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
    // onRegistro: Event handler para (ngSubmit)="onRegistro()" en formulario registro
    // Ejecutado cuando usuario hace submit del formulario de registro
    
    this.registroError = '';
    // Limpiar errores previos

    // ========== VALIDACIÓN 1: CAMPOS VACÍOS ==========
    if (!this.registroNombre || !this.registroApellido || !this.registroEmail || !this.registroTelefono || !this.registroPassword) {
      // Valida que TODOS los campos estén completos (5 campos obligatorios)
      
      this.registroError = 'Por favor, completa todos los campos';
      Swal.fire({
        icon: 'warning',
        title: 'Campos incompletos',
        text: 'Por favor, completa todos los campos obligatorios',
        confirmButtonColor: '#3085d6',
      });
      return;
    }

    // ========== VALIDACIÓN 2: FORMATO EMAIL ==========
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Misma regex que en onLogin() (reutilizable)
    
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

    // ========== VALIDACIÓN 3: CONTRASEÑA MÍNIMA ==========
    if (this.registroPassword.length < 6) {
      // Valida que contraseña tenga mínimo 6 caracteres
      // .length: Propiedad de string que devuelve cantidad de caracteres
      
      this.registroError = 'La contraseña debe tener al menos 6 caracteres';
      Swal.fire({
        icon: 'error',
        title: 'Contraseña inválida',
        text: 'La contraseña debe tener al menos 6 caracteres',
        confirmButtonColor: '#3085d6',
      });
      return;
    }

    // ========== LLAMADA AL SERVICIO ==========
    const result = this.userService.register(
      // userService.register(): Método del servicio que:
      // 1. Valida que email no exista ya en localStorage
      // 2. Crea nuevo usuario si validación pasa
      // 3. Retorna {success: boolean, user?: User, message?: string}
      
      this.registroNombre,
      this.registroApellido,
      this.registroEmail,
      this.registroTelefono,
      this.registroPassword
    );

    // ========== MANEJO DE ÉXITO/ERROR ==========
    if (result.success) {
      // Registro exitoso
      
      Swal.fire({
        icon: 'success',
        title: '¡Registro exitoso!',
        text: 'Tu cuenta ha sido creada correctamente. Ahora puedes iniciar sesión.',
        confirmButtonColor: '#3085d6',
      }).then(() => {
        // .then(): Promise callback después de que usuario cierre modal
        
        // Limpiar formulario y cambiar a login
        this.registroNombre = '';
        this.registroApellido = '';
        this.registroEmail = '';
        this.registroTelefono = '';
        this.registroPassword = '';
        // Limpiar todos los campos (buena UX: no muestra datos anteriores)
        
        this.cambiarALogin();
        // Navega a formulario login automáticamente
      });
    } else {
      // Registro fallido
      
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