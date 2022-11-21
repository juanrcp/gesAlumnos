import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';
import { DetalleContactoComponent } from './detalle-contacto/detalle-contacto.component';

const routes: Routes = [

  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'lista-contactos', component: ListaContactosComponent},
  {path: 'detalle-contacto/:id', component: DetalleContactoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
