import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabecera } from './cabecera/cabecera';
import { Cuerpo } from './cuerpo/cuerpo';
import { Footer } from './footer/footer';
import { Sidebarleft } from './sidebarleft/sidebarleft';
import { Sidebarright } from './sidebarright/sidebarright';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Cabecera, Cuerpo,Footer,Sidebarleft,Sidebarright],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyecto01');
}
