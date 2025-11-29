import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Cookies } from './components/cookies/cookies';
import AOS from 'aos'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Cookies],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('Ampliacion');
  ngOnInit(): void {
    // Inicializa AOS
    AOS.init();
  }
}
