import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../../servicios/alumnos.service';
import { ActivatedRoute } from '@angular/router';
import { Alumnos } from '../../interfaces/alumnos';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {

  alumnos: any[] = [];

  constructor(
    private alumnosServicio: AlumnosService,
    private ruta: ActivatedRoute
    ) { }

  ngOnInit(): void {
    //Si especificamos algo en la URL lo filtrara si no presenta todo
    if(this.ruta.snapshot.paramMap.get('curso')){
      this.getClase(this.ruta.snapshot.paramMap.get('curso')!);

    }else{
      this.getAllAlumnos();

    }
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

  //Obtenemos las clases ya filtradas
  getClase(curso: string){
    this.alumnosServicio.getCurso(curso).subscribe((alumnosSnapshot: any) => {
      this.alumnos = [];
      alumnosSnapshot.forEach((alumnosData: any) =>{
        console.log(alumnosData);
        this.alumnos.push({

          id: alumnosData.payload.doc.id,

          data: alumnosData.payload.doc.data()
        })

      });
    });
  }
}
