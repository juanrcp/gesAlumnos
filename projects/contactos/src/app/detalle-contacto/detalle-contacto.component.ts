import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../../../../usuarios/src/app/interfaces/usuario';
import { Location } from '@angular/common';
import { ContactosService } from '../contactos.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detalle-contacto',
  templateUrl: './detalle-contacto.component.html',
  styleUrls: ['./detalle-contacto.component.css']
})
export class DetalleContactoComponent implements OnInit {

  @Input() detalleContacto?: Usuario; 

  constructor(
    
    private ruta: ActivatedRoute,
    private contactoServicio: ContactosService
    
    ) { }

  ngOnInit(): void {

    this.getContacto();
  }

  //Este metodo no funciona
  getContacto(): void {
    
    const id = Number(this.ruta.snapshot.paramMap.get('id'));
    //this.detalleContacto = this.contactoServicio.getContacto(id);
    
  }
}
