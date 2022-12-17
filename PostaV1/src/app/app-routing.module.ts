import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Componentes/login/login.component';
import { MenuComponent } from './Componentes/menu/views/menu/menu.component';
import { RegistrarAdministradoresComponent } from './Componentes/registrarAdministradores/views/registrar-administradores/registrar-administradores.component';
import { RegistrarCitaComponent } from './Componentes/registrarCitas/views/registrar-cita/registrar-cita.component';

const routes: Routes = [
  { path: '', component: LoginComponent, title:'login' },
  { path: 'menu', component: MenuComponent, title:'login' },
  { path: 'registrar-cita', component: RegistrarCitaComponent, title:'login' },
  { path: 'registrar-administradores', component: RegistrarAdministradoresComponent, title:'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
