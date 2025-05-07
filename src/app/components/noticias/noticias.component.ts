import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent {
  noticia = '';
  historiasExito: string[] = ['Afiliado Juan logró duplicar sus ingresos...', 'María alcanzó su primer millón de visitas...'];
  emailSuscripcion = '';

  publicarNoticia() {
    if (this.noticia.trim()) {
      alert(`Noticia publicada: ${this.noticia}`);
      this.noticia = '';
    }
  }

  suscribirse() {
    if (this.emailSuscripcion.includes('@')) {
      alert(`Gracias por suscribirte con ${this.emailSuscripcion}`);
      this.emailSuscripcion = '';
    }
  }
}
