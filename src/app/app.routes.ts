import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormatosComponent } from './components/formatos/formatos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { DocumentacionComponent } from './components/documentacion/documentacion.component';
import { AfiliacionServiciosComponent } from './components/afiliacion-servicios/afiliacion-servicios.component';
import { NoticiasComponent } from './components/noticias/noticias.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'formatos', component: FormatosComponent },
  { path: 'contactos', component: ContactoComponent},
  { path: 'servicios', component: AfiliacionServiciosComponent},
  { path: 'documentacion', component: DocumentacionComponent},
  { path: 'noticias', component: NoticiasComponent},
  { path: '**', redirectTo: '' }
];
