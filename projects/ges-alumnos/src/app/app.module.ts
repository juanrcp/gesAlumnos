import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaAlumnosComponent } from './vistas/lista-alumnos/lista-alumnos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormAlumnosComponent } from './vistas/form-alumnos/form-alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaAlumnosComponent,
    FormAlumnosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Importacion necesaria para firebase con el entorno donde declaramos su variables
    AngularFireModule.initializeApp(environment.firebase),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
