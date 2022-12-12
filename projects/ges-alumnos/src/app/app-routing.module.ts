import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAlumnosComponent } from './vistas/lista-alumnos/lista-alumnos.component';
import { FormAlumnosComponent } from './vistas/form-alumnos/form-alumnos.component';

const routes: Routes = [
  {path: '', component: ListaAlumnosComponent},
  {path: 'alumno/:curso', component: ListaAlumnosComponent},
  {path: 'edit-Alumno/:documentId', component: FormAlumnosComponent},
  {path: 'creaAlumno', component: FormAlumnosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
