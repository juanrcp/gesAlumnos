import { Component, OnInit } from '@angular/core';
import { Alumnos } from '../../interfaces/alumnos';
import { AlumnosService } from '../../servicios/alumnos.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form-alumnos',
  templateUrl: './form-alumnos.component.html',
  styleUrls: ['./form-alumnos.component.css']
})
export class FormAlumnosComponent implements OnInit {

  alumno?: Alumnos;
  nuevoAlumno = true;

  //Creamos el formulario
  Formulario = this.formBuilder.group({
    idAlumno: [''],
    nombre: [''],
    apellidos: [''],
    curso: ['']
  });

  constructor(
    private alumnoServicio: AlumnosService,
    private ruta: ActivatedRoute, 
    private formBuilder: FormBuilder,
    private location: Location
    ) { }

  ngOnInit(): void {
    //Con esto preguntamos si exste el elemento
    if(this.ruta.snapshot.paramMap.get('documentId')){
      this.nuevoAlumno = false;

      //Cargamos datos del alumno en el formulario
      this.alumnoServicio.getAlumno(String(this.ruta.snapshot.paramMap.get('documentId'))).subscribe(resp =>{
        this.Formulario.setValue({...resp.payload.data()});
      });

      console.log("Datos de alumnos cargados en el formulario.");

    } else{
      this.nuevoAlumno = true;
      console.log("Introduzca nuevo alumno.");
    }
  }

  onSubmit(): void{

    let id= String(this.ruta.snapshot.paramMap.get('documentId'));

    if(!this.nuevoAlumno){
      this.alumnoServicio.updateAlumno(id, this.Formulario.value).then(
        () => {
          console.log("Alumno Modificado.");
          alert("Alumno Modificado.");
        }, 
        (error) => {
          console.log(error);
        }
      );
    }
    else{
      this.alumnoServicio.newAlumno(this.Formulario.value);
      console.log("Alumno Creado.");
      alert("Alumno Creado.");
    }

  }

  borrar(): void {
    let id = String(this.ruta.snapshot.paramMap.get('documentId'));
    this.alumnoServicio.delete(id);
    alert("Alumno Eliminado.");
    console.log("Alumno Eliminado.");
  }

  goBack(): void {
    this.location.back();
  }

}
