import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  noticias = [
    { imagen: 'assets/noticia1.jpg', descripcion: 'Resumen breve de la noticia 1' },
    { imagen: 'assets/noticia2.jpg', descripcion: 'Resumen breve de la noticia 2' },
    { imagen: 'assets/noticia3.jpg', descripcion: 'Resumen breve de la noticia 3' },
    { imagen: 'assets/noticia4.jpg', descripcion: 'Resumen breve de la noticia 4' },
    { imagen: 'assets/noticia5.jpg', descripcion: 'Resumen breve de la noticia 5' },
    { imagen: 'assets/noticia6.jpg', descripcion: 'Resumen breve de la noticia 6' },
    { imagen: 'assets/noticia7.jpg', descripcion: 'Resumen breve de la noticia 7' }
  ];

  visibleStartIndex = 0;
  visibleCount = 4;

  next() {
    if (this.visibleStartIndex + this.visibleCount < this.noticias.length) {
      this.visibleStartIndex += this.visibleCount;
    }
  }

  prev() {
    if (this.visibleStartIndex - this.visibleCount >= 0) {
      this.visibleStartIndex -= this.visibleCount;
    }
  }

  get visibleNoticias() {
    return this.noticias.slice(this.visibleStartIndex, this.visibleStartIndex + this.visibleCount);
  }
}
