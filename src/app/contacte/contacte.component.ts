import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from "../users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contacte',
  templateUrl: './contacte.component.html',
  styleUrls: ['./contacte.component.css']
})
export class ContacteComponent {
  name: any;
  mail: any;
  missatge: any;

  accioMissatge= 'ha enviat un missatge'


  constructor(private http: HttpClient, private u: UsersService,public router:Router) {}

  enviarMensaje() {
    if (this.u.autenticat){
      const missatge = {
        name: this.name,
        mail: this.mail,
        missatge: this.missatge
      };

      this.http.post('http://localhost:3080/api/contacte', missatge).subscribe(
        (response) => {
          console.log('S\'ha enviat el teu missatge:', response);
          window.alert("S'ha enviat el teu missatge")
        }
      );

      this.u.guardarAccio(this.accioMissatge)
    }else{
      window.alert("Inicia sessio per enviar un missatge")
      this.router.navigate(["/signin"]);
    }


  }
}
