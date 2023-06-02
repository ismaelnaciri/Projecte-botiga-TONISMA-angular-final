import {Component, OnInit} from '@angular/core';
import {UsersService} from "../users.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  accioLogout='ha tancat la sessio'
  constructor(private s: UsersService) {
  }

  logout() {
    if(this.s.autenticat){
      this.s.guardarAccio(this.accioLogout)
    }
    this.s.autenticat = false;
    window.alert(`S'ha tancat la sessió.`);
    window.location.reload();

  }

  ngOnInit() {
  }
}
