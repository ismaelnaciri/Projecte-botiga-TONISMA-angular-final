import {Component, OnInit} from '@angular/core';
import {UsersService} from "../users.service";

@Component({
  selector: 'app-titol-logo',
  templateUrl: './titol-logo.component.html',
  styleUrls: ['./titol-logo.component.css']
})
export class TitolLogoComponent implements OnInit{

  iniciatSessio=this.s.autenticat
  name: any;
  wallet = "";

  constructor(public s: UsersService) {


  }


  ngOnInit() {

  }

  update() {
    this.wallet = this.s.walletName;
  }


}
