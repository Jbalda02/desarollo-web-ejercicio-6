import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { HeroComponent } from "./componentes/hero/hero.component";
import { AlbumViewComponent } from "./componentes/album-view/album-view.component";
import { FotoServicioService } from './Servicios/foto-servicio.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ContactoComponent,
    HeroComponent,
    AlbumViewComponent,
    HttpClientModule,
    CommonModule // Importa CommonModule para usar *ngFor
  ],
  providers: [FotoServicioService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'desarollo-web-ejercicio-6';
}