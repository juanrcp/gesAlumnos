import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario } from '../../../usuarios/src/app/interfaces/usuario';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  constructor(private http: HttpClient) { }

  getContactos(): Observable<any> {
    //return this.http.get<any>('https://reqres.in/api/users');
    return this.http.get<any>('https://reqres.in/api/users?page=2');
  }

  //PARA INCRUSTAR CON EL DOLAR ($) HAY QUE USAR LA COMILLA INVERSA
  getContacto(id: number) : Observable<any>{
    return this.http.get<any>(`https://reqres.in/api/users/${id}`);
  }

  //Metodo para comprobar errores
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
  
      return of(result as T);
    };
  }
  
  private log(message: string) {
    console.log(message);
  }


  //Insercion de contacto. El metodo nos pedira donde quiere insertarlo y el que. 
  //Con el pipe podemos implementar el metodo para ver los errores
  nuevoContacto(contacto: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://reqres.in/api/users', contacto)
    .pipe(
      catchError(this.handleError('nuevoContacto', contacto))
    );;
  }

  //Update de contacto. El metodo nos pedira que quiere acturalizar y con que
  updateContacto(id: number, contacto: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>(`https://reqres.in/api/users/${id}`, contacto);
  }

  //Borrar contactos
  borraContacto(id: number): Observable<number>{
    return this.http.delete<number>(`https://reqres.in/api/users/${id}`);
  }
  
}
