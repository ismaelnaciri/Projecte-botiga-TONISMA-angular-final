import {Component, OnInit} from '@angular/core';
import {ServeisService} from "../serveis.service";
import {UsersService} from "../users.service";
import {HttpClient} from "@angular/common/http";

//import { Product, products } from "../Productes";

@Component({
  selector: 'app-cataleg',
  templateUrl: './cataleg.component.html',
  styleUrls: ['./cataleg.component.css']
})
export class CatalegComponent implements OnInit {
  products: any;
  accioAddCistella: string|undefined
  constructor(private s: ServeisService, private http: HttpClient, private u:UsersService) {

    this.listProductes();
  }

  ngOnInit() {
  }

  listProductes() {
    this.http.get('http://localhost:3080/productes')
      .subscribe(data => {
        this.products = data;
      });
  }

  addToCart(product: any){
    product.quantity = 1;
    this.s.addToCart(product);
    window.alert((`${product.nom} s'ha afegit a la cistella.`));

    if (this.u.autenticat){
      this.accioAddCistella=`ha afegit ${product.nom} a la cistella`
      this.u.guardarAccio(this.accioAddCistella)
    }

  }

  filterShown (product: any) {
    let filtratgeJoc = product.type = "Joc";
    let filtratgeConsola = product.type = "Consola";
    let filtratgeMando = product.type = "Mando";
  }


}
