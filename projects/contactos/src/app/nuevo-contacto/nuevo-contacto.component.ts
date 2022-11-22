import { Component, OnInit } from '@angular/core';
import { ContactosService } from '../contactos.service';
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { Usuario } from '../../../../usuarios/src/app/interfaces/usuario';

@Component({
  selector: 'app-nuevo-contacto',
  templateUrl: './nuevo-contacto.component.html',
  styleUrls: ['./nuevo-contacto.component.css']
})
export class NuevoContactoComponent implements OnInit {

  nuevoContacto?: any;

  contactForm = this.formulario.group({

    first_name:[''],
    last_name:[''],
    avatar: [''],
    email: [''],
    id: ['']
    
  });

  constructor(
    private contactoServicio: ContactosService,
    private formulario: FormBuilder,
    private location: Location
    
    ) { }

  ngOnInit(): void {
    this.contactoServicio;
  }

  onSubmit() {
    this.nuevoContacto = this.contactForm.value;
    this.contactForm.reset();

    console.warn('Registro completado');
  }

  goBack(): void {
    this.location.back();
  }
}
