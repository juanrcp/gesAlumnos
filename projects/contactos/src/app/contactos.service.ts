import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../../../usuarios/src/app/interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  constructor(private http: HttpClient) { }

  getContactos(): Observable<any> {
    //return this.http.get<any>('https://reqres.in/api/users');
    return this.http.get<any>('https://reqres.in/api/users?page=2');
  }

  getContacto(id: number) : Observable<any>{
    return this.http.get<any>('https://reqres.in/api/users/' + id);
  }
  
}
