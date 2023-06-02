import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService implements OnInit {
  public autenticat: boolean;
  public usuariAutenticat= "dummy";
  public emailAutenticat: any;
  public walletName: any;


  constructor(private http:HttpClient) {
    this.autenticat=false
  }

  ngOnInit(): void {

  }
  guardarAccio(action: string) {
    const usuari = this.usuariAutenticat;
    const accio = action
    const fechaHora = new Date().toLocaleString()

    this.http.post('http://localhost:3080/guardar-accio', { usuari, accio,fechaHora })
      .subscribe((response) => {
        console.log(response);
      });
  }

}

