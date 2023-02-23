import { Component, Input } from '@angular/core';
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
  ngOnInit(){
    this.convertToDecimal();
  }
  constructor(private cartService: CartService,
    private cartComponent : CartComponent){}
  convertToDecimal(){
    this.price = this.product.product.price/100; 
  }

  removefromCart(){
    this.cartService.removeProductFromCart(this.index);
    this.cartComponent.getCart();
  }

}
