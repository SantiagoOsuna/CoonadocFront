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
    { title: 'Formato SED servicios', src: 'assets/SEDservicios.pdf' },
    { title: 'Formato SED aportes', src: 'assets/SEDaportes.pdf' },
    { title: 'Formato solicitud de crédito', src: 'assets/solicitudCredito.pdf' },
    { title: 'Formato solicitud de asociación', src: 'assets/solicitudAsociacion.pdf' },
    { title: 'Formato presentación familiares asociación', src: 'assets/familiaresAsociacion.pdf' },
  ];

  selectedPdf = this.pdfs[0]; // PDF por defecto
  selectPdf(pdf: any) {
    this.selectedPdf = pdf;
  }
}
