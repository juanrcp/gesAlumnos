import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../../usuarios/src/app/interfaces/usuario';
import { ContactosService } from '../contactos.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent implements OnInit {

  listaContactos : any [] = [];

  constructor(
    private contactoServicio: ContactosService, 
    private location: Location
    ) { }

  ngOnInit(): void {

    this.contactoServicio.getContactos().subscribe(resp => {
      console.log(resp);

    //Con esto extraemos la informacion para luego presentarla
    resp.data.forEach((contac: Usuario) => {
      this.listaContactos.push(contac);        
    });
  });
  }

  goBack(): void {
    this.location.back();
  }

}
