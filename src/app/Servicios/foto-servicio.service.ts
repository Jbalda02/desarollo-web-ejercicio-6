import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FotoServicioService {
  private apiUrl = 'https://picsum.photos/v2/list?page=1&limit=10';

  constructor(private http: HttpClient) {}

  obtenerFotos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}