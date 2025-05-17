import { Component, AfterViewInit } from '@angular/core';

declare var google: any; // Importa la API global de Google Maps

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent implements AfterViewInit {

  constructor() {}

  ngAfterViewInit(): void {
    this.initMap();
  }

  initMap(): void {
    const ubicacionCoonadoc = { lat: 4.6192, lng: -74.0721 };

    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: ubicacionCoonadoc,
    });

    new google.maps.Marker({
      position: ubicacionCoonadoc,
      map: map,
      title: "COONADOC",
    });
  }
}
