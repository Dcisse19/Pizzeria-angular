import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/mocks/products.mock';
import { CartComponent } from 'src/app/pages/cart/cart.component';
import { CartProduct, CartService } from 'src/app/services/cart/cart.service';


@Component({
  selector: 'app-cart-product-card',
  templateUrl: './cart-product-card.component.html',
  styleUrls: ['./cart-product-card.component.css']
})
export class CartProductCardComponent {
  @Input() product! : CartProduct;
  @Input() index! : number;
  @Input() cart! : CartProduct[];
  price! : number;
  showButton: boolean = true;

  ngOnInit(){
    this.convertToDecimal();
    this.hideButton();
  }
  constructor(private cartService: CartService,
    private cartComponent : CartComponent,
    private location : Location){}

  convertToDecimal(){
    this.price = this.product.product.price/100; 
  }

  removefromCart(){
    this.cartService.removeProductFromCart(this.index);
    this.cartComponent.getCart();
  }

  hideButton(){
    if(this.location.path().includes('recapitulatif')){
      this.showButton = false;
    }
  }

}
