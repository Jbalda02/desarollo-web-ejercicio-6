import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Foto } from '../Interfaces/foto';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FotoServicioService {
  private apiUrl = 'https://picsum.photos/v2/list?page=1&limit=9'; // Get 9 images

  constructor(private http: HttpClient) {}

  obtenerdatos(): Observable<Foto[]> {
    return this.http.get<Foto[]>(this.apiUrl).pipe(
      map(fotos => fotos.map(foto => ({
        id: foto.id,
        description: foto.description || `Random Image ${foto.id}`,
        url: `https://picsum.photos/id/${foto.id}/200/200` // Generate image URL
      })))
    );
  }
}