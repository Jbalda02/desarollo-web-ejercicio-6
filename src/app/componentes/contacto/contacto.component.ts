import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  imports: [],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  title: string = " Contactos"
  medios: any = [
    { texto: "Follow on Twitter" },
    { texto: "Like on Facebook" },
    { texto: "Email me" },    
  ]
}
