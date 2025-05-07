import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  noticias = [
    { imagen: 'assets/noticia1.jpg', titulo: 'Noticia 1', descripcion: 'Resumen breve de la noticia 1' },
    { imagen: 'assets/noticia2.jpg', titulo: 'Noticia 2', descripcion: 'Resumen breve de la noticia 2' },
    { imagen: 'assets/noticia3.jpg', titulo: 'Noticia 3', descripcion: 'Resumen breve de la noticia 3' },
    { imagen: 'assets/noticia4.jpg', titulo: 'Noticia 4', descripcion: 'Resumen breve de la noticia 4' },
    { imagen: 'assets/noticia5.jpg', titulo: 'Noticia 5', descripcion: 'Resumen breve de la noticia 5' },
    { imagen: 'assets/noticia6.jpg', titulo: 'Noticia 6', descripcion: 'Resumen breve de la noticia 6' },
    { imagen: 'assets/noticia7.jpg', titulo: 'Noticia 7', descripcion: 'Resumen breve de la noticia 7' }
  ];

  noticiaSeleccionada: any = null;

  visibleStartIndex = 0;
  visibleCount = 4;

  constructor(private router: Router) {}

  get visibleNoticias() {
    return this.noticias.slice(this.visibleStartIndex, this.visibleStartIndex + this.visibleCount);
  }

  next() {
    if (!this.haLlegadoAlFinal) {
      this.visibleStartIndex += this.visibleCount;
    }
  }

  prev() {
    if (this.visibleStartIndex - this.visibleCount >= 0) {
      this.visibleStartIndex -= this.visibleCount;
    }
  }

  get haLlegadoAlFinal(): boolean {
    return this.visibleStartIndex + this.visibleCount >= this.noticias.length;
  }

  verMas() {
    this.router.navigate(['/noticias']);
  }

  abrirModal(noticia: any) {
    this.noticiaSeleccionada = noticia;
    const modal = new Modal(document.getElementById('modalNoticia')!);
    modal.show();
  }

  leerArticulo() {
    this.router.navigate(['/noticia', this.noticiaSeleccionada.titulo.toLowerCase().replace(/ /g, '-')]);
  }
}
