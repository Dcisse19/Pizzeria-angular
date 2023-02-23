import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/mocks/products.mock';
import { ProductsService } from '../products/products.service';

export interface CartProduct{
  product: IProduct;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  totalPrice: number = 0;
  productQuantity: number = 0;
  constructor(
    private productService: ProductsService,
    private router: Router
  ) {}

  // Création du panier
  private createCart(){
    const newCart : CartProduct[] = [];
    const newCartString = JSON.stringify(newCart);
    localStorage.setItem('cart', newCartString);
  }

  // Sauvegarde du panier
  private saveCart(cart: CartProduct[]){
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  getCart(){
    const cart = localStorage.getItem('cart');
    if(cart){
      return JSON.parse(cart);
    } else {
      this.createCart();
      this.getCart();

    }
  }

  initCart(){
    this.getCart();
    // this.getTotalQuantity();
    // this.getTotalPrice();
  }

  resetCart(){
    this.createCart();
    // this.getTotalPrice();
    // this.getTotalQuantity();
  } 

  addProductToCart(cartProduct: CartProduct){
    const cart = this.getCart();
    cart.push(cartProduct);
    this.saveCart(cart);
     // this.getTotalQuantity();
    // this.getTotalPrice();
    this.router.navigate(['/cart']);
  }

  removeProductFromCart (index:number){
    const cart = this.getCart();
    cart.splice(index,1);
    this.saveCart(cart);
    // this.getTotalQuantity();
    // this.getTotalPrice();
  }

  


}
