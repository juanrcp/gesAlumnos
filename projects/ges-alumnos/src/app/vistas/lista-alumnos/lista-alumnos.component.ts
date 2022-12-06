import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../../servicios/alumnos.service';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {

  alumnos: any[] = [];

  constructor(
    private alumnosServicio: AlumnosService,
    ) { }

  ngOnInit(): void {
    this.getAllAlumnos();
  }

  getAllAlumnos(){

    this.alumnosServicio.getAllAlumnos().subscribe((alumnosSnapshot: any) => {
      this.alumnos = [];
      alumnosSnapshot.forEach((alumnosData: any) =>{
        console.log(alumnosData);
        this.alumnos.push({
          //Id de la base de datos NO del alumno
          id: alumnosData.payload.doc.id,
          //En este data es donde guardamos la lista de objetos (alumnos) 
          //y lo extraemos con la propiedad data
          data: alumnosData.payload.doc.data()
        })

      });
    });
  } 
}
