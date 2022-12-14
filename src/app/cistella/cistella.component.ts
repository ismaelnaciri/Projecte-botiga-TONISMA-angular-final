import {Component, OnInit} from '@angular/core';
import {ServeisService} from "../serveis.service";
import {Product} from "../Productes";

@Component({
  selector: 'app-cistella',
  templateUrl: './cistella.component.html',
  styleUrls: ['./cistella.component.css']
})
export class CistellaComponent implements OnInit{
  items = this.s.getItems();

  constructor(private s: ServeisService) {
  }

  premerEnviar (): void{
    this.items = this.s.clearItems();
  }

  esborrar(index: number){
    this.s.eliminarItem(index);
  }

  ValidateInput (event: any, i: number){
    const quantity = +event.target.value;
    if (quantity < 1){
      event.target.value = this.items[i].quantity;
      return;
    }
    this.QuantityUpdated(quantity, i)
  }
  private QuantityUpdated (quantity: number, i: number){
    this.items[i].quantity = quantity;

    this.s.posarDadesCistella(this.items)
  }

  public calcularTotal():number{
    let total:number = 0;
    for (let item of this.items){
      total += (item.quantity * item.preu)
    }
    return total;
  }
  public clearAll() {
    document.location.reload();
  }

  ngOnInit() {
  }
}
