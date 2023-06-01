import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contacte',
  templateUrl: './contacte.component.html',
  styleUrls: ['./contacte.component.css']
})
export class ContacteComponent {
  name: any;
  mail: any;
  missatge: any;


  constructor(private http: HttpClient) {}

  enviarMensaje() {
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
  }
}
