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

  detalleContacto?: Usuario; 

  constructor(
    
    private ruta: ActivatedRoute,
    private contactoServicio: ContactosService,
    private location: Location
    
    ) { }

  ngOnInit(): void {

    this.getContacto();
  }

  getContacto(): void {  

    this.ruta.paramMap.subscribe( params => {
      let id = Number(params.get('id'));
      this.contactoServicio.getContacto(id).subscribe(
        (resp:any) => {
          this.detalleContacto = resp.data;
        }
      )
    }

    )
    
  }

  goBack(): void {
    this.location.back();
  }
}
