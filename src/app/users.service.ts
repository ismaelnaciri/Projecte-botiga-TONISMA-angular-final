import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService implements OnInit {
  public autenticat: boolean;
  public usuariAutenticat: any;
  public emailAutenticat: any;
  public walletName: any;


  constructor(private http:HttpClient) {
    this.autenticat=false
  }

  ngOnInit(): void {

  }

}

