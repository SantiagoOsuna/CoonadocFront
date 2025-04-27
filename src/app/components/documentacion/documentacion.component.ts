import { Component } from '@angular/core';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-documentacion',
  standalone: true,
  imports: [CommonModule, NgxExtendedPdfViewerModule],
  templateUrl: './documentacion.component.html',
  styleUrl: './documentacion.component.css'
})
export class DocumentacionComponent {
  pdfs = [
    { title: 'Formato de Autorización', src: 'assets/pdf1.pdf' },
    { title: 'Formato de Inscripción', src: 'assets/pdf2.pdf' },
    { title: 'Formato de Solicitud', src: 'assets/pdf3.pdf' },
    { title: 'Formato de Retiro', src: 'assets/pdf4.pdf' },
    { title: 'Formato de Certificación', src: 'assets/pdf5.pdf' },
  ];
}
