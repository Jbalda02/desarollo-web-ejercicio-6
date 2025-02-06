import { Component } from '@angular/core';
import { FotoServicioService } from '../../Servicios/foto-servicio.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Foto } from '../../Interfaces/foto';
@Component({
  selector: 'app-album-view',
  imports: [HttpClientModule],
  providers: [FotoServicioService],
  templateUrl: './album-view.component.html',
  styleUrl: './album-view.component.css'
})

export class AlbumViewComponent {
  fotos: Foto[] = []
  listOfthumbnails =[0,1,2,3,4,5,6,7,8]
  
  constructor(private fotoServicio:FotoServicioService){

  }

  ngOnInit(): void {
    this.fotoServicio.obtenerdatos().subscribe(fotos => {
      this.fotos = fotos;
  })
  }
}
