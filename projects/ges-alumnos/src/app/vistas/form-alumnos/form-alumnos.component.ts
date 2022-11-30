import { Component, OnInit } from '@angular/core';
import { Alumnos } from '../../interfaces/alumnos';
import { AlumnosService } from '../../servicios/alumnos.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-alumnos',
  templateUrl: './form-alumnos.component.html',
  styleUrls: ['./form-alumnos.component.css']
})
export class FormAlumnosComponent implements OnInit {

  alumno?: Alumnos;
  nuevoAlumno = true;

  //Creamos el formulario


  constructor(
    private alumnoServicio: AlumnosService,
    private ruta: ActivatedRoute, 
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    //Con esto preguntamos si exste el elemento
    if(this.ruta.snapshot.paramMap.get('documentId')){
      this.nuevoAlumno = false;

      //Cargamos datos del alumno en el formulario

    } else{
      this.nuevoAlumno = true;
    }
  }

}
