import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { HeroComponent } from "./componentes/hero/hero.component";
import { AlbumViewComponent } from "./componentes/album-view/album-view.component";
import { FotoServicioService } from './Servicios/foto-servicio.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Foto } from './Interfaces/foto';
@Component({
  selector: 'app-root',
  imports: [ContactoComponent, HeroComponent, AlbumViewComponent , HttpClientModule],
  providers: [FotoServicioService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'desarollo-web-ejercicio-6';
  fotos: Foto[] = []
  listOfthumbnails =[0,1,2,3,4,5,6,7,8]
  
}


