import { Component } from '@angular/core';
import {UsersService} from "../users.service";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  constructor(private u: UsersService) {
  }
  autenticat=this.u.autenticat
  nom=this.u.usuariAutenticat
  email=this.u.emailAutenticat

}
