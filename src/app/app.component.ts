import { Component } from '@angular/core';
import { IProduct, PRODUCTS } from './mocks/products.mock';
import { CartService } from './services/cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private cartService: CartService
  ){}
  title = 'Projet_Pizzeria';

  ngOnInit(){
    this.cartService.initCart();
  }
}
