import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartProduct, CartService, RecapContent } from 'src/app/services/cart/cart.service';
import { TableServiceService } from 'src/app/services/table-service.service';
import { RecapComponent } from '../recap/recap.component';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart: CartProduct[] = [];
  
  constructor(public cartService: CartService,
    public tableService: TableServiceService,
    private router : Router){}

  ngOnInit(){
    this.getCart();
    this.tableService.redirectIfNoTable();
  }
  getCart(){
    this.cart = this.cartService.getCart();
  }

  deleteCart(){
    this.cartService.resetCart();
    this.getCart();
  }

  validateCart(){
    this.cartService.productQuantity = 0;
    this.router.navigate(['/recapitulatif']);
  }
}
