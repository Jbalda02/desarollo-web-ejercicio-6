import { Component, OnInit } from '@angular/core';
import { FotoServicioService } from '../../Servicios/foto-servicio.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-view',
  templateUrl: './album-view.component.html',
  styleUrls: ['./album-view.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class AlbumViewComponent implements OnInit {
  fotos: any;

  constructor(private fotoServicio: FotoServicioService) {}

  ngOnInit(): void {
    this.fotoServicio.obtenerFotos().subscribe((data: any) => {
      this.fotos = data.map((imagen: { id: any; download_url: any; author?: string }) => ({
        id: imagen.id,
        description: imagen.author || "No description available",
        download_url: imagen.download_url
      }));
    });
  }
}