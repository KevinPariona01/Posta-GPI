import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Componentes/login/login.component';
import { MenuComponent } from './Componentes/menu/views/menu/menu.component';
import { RegistrarCitaComponent } from './Componentes/registrarCitas/views/registrar-cita/registrar-cita.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

//MATERIAL
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SnackBarComponent } from './Componentes/snack-bar/snack-bar.component';
import { RegistrarAdministradoresComponent } from './Componentes/registrarAdministradores/views/registrar-administradores/registrar-administradores.component';
import { RegistrarAdministradoresEditarComponent } from './Componentes/registrarAdministradores/views/registrar-administradores-editar/registrar-administradores-editar.component';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    RegistrarCitaComponent,
    SnackBarComponent,
    RegistrarAdministradoresComponent,
    RegistrarAdministradoresEditarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    FormsModule,
    MatTableModule,
    MatSnackBarModule,
    MatDialogModule,
    HttpClientModule
    

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    RegistrarAdministradoresEditarComponent
  ]
})
export class AppModule { }
