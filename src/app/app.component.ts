import { Component } from '@angular/core';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { HeroComponent } from "./componentes/hero/hero.component";
import { FotoServicioService } from './Servicios/foto-servicio.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './componentes/menu/menu.component';
import { RouterModule, RouterOutlet } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ContactoComponent,
    MenuComponent,
    HeroComponent,
    HttpClientModule,
    CommonModule,
    RouterModule, // Add RouterModule here
  ],
  providers: [FotoServicioService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'desarollo-web-ejercicio-6';
}