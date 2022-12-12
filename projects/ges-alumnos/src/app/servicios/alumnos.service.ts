import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Alumnos } from '../interfaces/alumnos';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private miColeccion = 'alumnos';

  //Ponemos el firebase en el contructor para que nos conecte
  constructor(private firebase: AngularFirestore) { }

  //Hacemos el CRUD

  //Leemos un alumno
  getAlumno(id: string): Observable<any>{
    //Esto nos va a permitir coger la coleccion alumnos y dentro de estos 
    //los documentos con el id correspondiente y el ultimo metodo es para que se 
    //tenga en cuenta los cmabios
    return this.firebase.collection(this.miColeccion).doc(id).snapshotChanges();
  }

  //Leer todos los alumnos
  getAllAlumnos(){
    return this.firebase.collection(this.miColeccion).snapshotChanges();
  }

  //Nuevo Alumno
  newAlumno(alumno: any){
    return this.firebase.collection(this.miColeccion).add(alumno);
  }

  //Actualiza Alumno: de la coleccion coge el alumno con el documento ID 
  //y actualizalo con el nuevo alumno
  updateAlumno(documentId: string, alumno: any){
    return this.firebase.collection(this.miColeccion).doc(documentId).update(alumno);
  }

  //Borra Alumno
  delete(documentId: string){
    return this.firebase.collection(this.miColeccion).doc(documentId).delete();
  }

  //Filtrar por curso. El filtro nos ayuda firebase
  getCurso(curso: string){
    return this.firebase.collection(this.miColeccion, ref => ref.where('curso', '==', curso)).snapshotChanges();
  }
}
