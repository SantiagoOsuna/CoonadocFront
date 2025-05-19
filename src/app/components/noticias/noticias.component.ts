import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

declare const bootstrap: any; // Para usar el modal de Bootstrap

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent {
  // Noticias actuales
  noticias = [
    { imagen: 'assets/noticia1.jpg', titulo: 'Noticia 1', descripcion: 'Resumen breve de la noticia 1' },
    { imagen: 'assets/noticia2.jpg', titulo: 'Noticia 2', descripcion: 'Resumen breve de la noticia 2' },
    { imagen: 'assets/noticia3.jpg', titulo: 'Noticia 3', descripcion: 'Resumen breve de la noticia 3' },
    { imagen: 'assets/noticia4.jpg', titulo: 'Noticia 4', descripcion: 'Resumen breve de la noticia 4' },
    { imagen: 'assets/noticia5.jpg', titulo: 'Noticia 5', descripcion: 'Resumen breve de la noticia 5' },
    { imagen: 'assets/noticia6.jpg', titulo: 'Noticia 6', descripcion: 'Resumen breve de la noticia 6' },
    { imagen: 'assets/noticia7.jpg', titulo: 'Noticia 7', descripcion: 'Resumen breve de la noticia 7' }
  ];

  historiasExito = [
  { imagen: 'assets/exito1.jpg', titulo: 'Juan Pérez', descripcion: 'Afiliado que logró duplicar sus ingresos en un año gracias al apoyo de la cooperativa.' },
  { imagen: 'assets/exito2.jpg', titulo: 'María Rodríguez', descripcion: 'Transformó su pequeño negocio en una gran empresa con nuestros créditos solidarios.' },
  { imagen: 'assets/exito3.jpg', titulo: 'Carlos Gómez', descripcion: 'Completó sus estudios universitarios gracias a nuestras becas y apoyo financiero.' }
];


  // Noticia seleccionada para el modal
  noticiaSeleccionada: any = null;

  emailSuscripcion = '';

  // Modelo para nueva noticia
  nuevaNoticia = {
    titulo: '',
    imagen: '',
    descripcion: ''
  };

  // Abrir modal para ver una noticia
  abrirModal(noticia: any) {
    this.noticiaSeleccionada = noticia;
    const modal = new bootstrap.Modal(document.getElementById('modalNoticia'));
    modal.show();
  }

  // Guardar nueva noticia
  guardarNoticia() {
    if (this.nuevaNoticia.titulo && this.nuevaNoticia.imagen && this.nuevaNoticia.descripcion) {
      this.noticias.unshift({ ...this.nuevaNoticia });
      this.nuevaNoticia = { titulo: '', imagen: '', descripcion: '' };
    } else {
      alert('Por favor, completa todos los campos antes de publicar.');
    }
  }

  // Simular lectura del artículo
  leerArticulo() {
    alert('Aquí puedes mostrar el artículo completo o redirigir a otra vista.');
  }

  // Suscribirse al boletín
    // Suscribirse al boletín
  suscribirse() {
    if (this.emailSuscripcion.includes('@')) {
      alert(`Gracias por suscribirte con ${this.emailSuscripcion}`);
      this.emailSuscripcion = '';
    } else {
      alert('Por favor, ingresa un correo válido.');
    }
  }
}
