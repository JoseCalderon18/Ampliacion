import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import AOS from 'aos';

@Component({
  selector: 'app-login-registro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login-registro.html',
  styleUrl: './login-registro.css',
})
export class LoginRegistro implements OnInit {
  mostrarLogin: boolean = true;
  mostrarRegistro: boolean = false;

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
    setTimeout(() => {
      this.mostrarRegistro = true;
      AOS.refresh();
    }, 100);
  }

  cambiarALogin(): void {
    this.mostrarRegistro = false;
    setTimeout(() => {
      this.mostrarLogin = true;
      AOS.refresh();
    }, 100);
  }
}