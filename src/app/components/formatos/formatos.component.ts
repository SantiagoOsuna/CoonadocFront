import { Component } from '@angular/core';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { CommonModule } from '@angular/common'; // siempre útil

@Component({
  selector: 'app-formatos',
  standalone: true,
  imports: [CommonModule, NgxExtendedPdfViewerModule],
  templateUrl: './formatos.component.html',
  styleUrls: ['./formatos.component.css']
})
export class FormatosComponent {
  // Lista de documentos normativos con opción de descarga
  documentos = [
    { nombre: 'Documento Normativo 1', url: 'assets/docs/documento1.pdf' },
    { nombre: 'Documento Normativo 2', url: 'assets/docs/documento2.pdf' }
    // Añadir más documentos si es necesario
  ];

  // Método para descargar un documento
  downloadDocument(url: string) {
    const link = document.createElement('a');
    link.href = url;
    link.download = url.split('/').pop() || 'documento.pdf'; // Nombre del archivo a descargar
    link.click();
  }
}