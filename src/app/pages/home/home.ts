import { Component } from '@angular/core';
import { CardHome } from '../../components/card-home/card-home';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [CardHome, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
