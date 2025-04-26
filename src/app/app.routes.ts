import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormatosComponent } from './formatos/formatos.component';
import { ContactoComponent } from './contacto/contacto.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'formatos', component: FormatosComponent },
  { path: 'contactos', component: ContactoComponent},
  { path: '**', redirectTo: '' }
];
