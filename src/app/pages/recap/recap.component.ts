import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartProduct, CartService } from 'src/app/services/cart/cart.service';
import { TableServiceService } from 'src/app/services/table-service.service';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.css']
})
export class RecapComponent {
  cart: CartProduct[] = [];

  constructor(public tableService : TableServiceService, 
    public cartService: CartService,
    private router : Router){}

  ngOnInit(){
    this.getCart();
  }
  getCart(){
    this.cart = this.cartService.getCart();
    // console.log(this.cart);
  }

  startNewOrder(){
    this.cartService.resetCart();
    this.tableService.clearSelectedTable();
    this.router.navigate(['/']);
  }
}
