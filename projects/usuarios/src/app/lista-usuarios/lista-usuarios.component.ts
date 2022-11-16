import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  listaUsuarios: any[] = [];

  constructor(private userService: UsuariosService) { }

  ngOnInit(): void {
    //Esto de aqui es solo para provar y presentarlo en consola 
    this.userService.getUsuarios().subscribe(resp => {
      console.log(resp);

      //Con esto extraemos la informacion para luego presentarla
      resp.data.forEach((user: Usuario) => {
        this.listaUsuarios.push(user);        
      });
    });
  }

}
