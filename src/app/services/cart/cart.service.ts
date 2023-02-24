import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/mocks/products.mock';

export interface CartProduct {
  product: IProduct;
  quantity: number;
}

export interface RecapContent {
  products: CartProduct[];
  recapPrice: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  totalPrice: number = 0;
  productQuantity: number = 0;
  constructor(private router: Router) { }

  // Création du panier
  private createCart() {
    const newCart: CartProduct[] = [];
    const newCartString = JSON.stringify(newCart);
    localStorage.setItem('cart', newCartString);
  }

  // Sauvegarde du panier
  private saveCart(cart: CartProduct[]) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  getCart() {
    const cart = localStorage.getItem('cart');
    if (cart) {
      return JSON.parse(cart);
    } else {
      this.createCart();
      this.getCart();

    }
  }


  initCart() {
    this.getCart();
    this.getTotalQuantity();
    this.getTotalPrice();
  }

  resetCart() {
    this.createCart();
    this.getTotalPrice();
    this.getTotalQuantity();
  }

  addProductToCart(cartProduct: CartProduct) {
    const cart = this.getCart();
    cart.push(cartProduct);
    // this.productQuantity++;
    this.saveCart(cart);
    this.getTotalQuantity();
    this.getTotalPrice();
    this.router.navigate(['/cart']);
  }

  removeProductFromCart(index: number) {
    const cart = this.getCart();
    cart.splice(index, 1);
    // if(this.productQuantity > 0){
    //   this.productQuantity--;
    // }
    this.saveCart(cart);
    this.getTotalQuantity();
    this.getTotalPrice();
  }



  getCartProductById(id: number) {
    const cart = this.getCart();
    const product = cart.find((product: CartProduct) => product.product.id === id);
    return product;
  }


  getTotalPrice(): void {
    const cart = this.getCart();
    const total = cart.reduce((accumulator: number, currentValue: CartProduct) => {
      const product = this.getCartProductById(currentValue.product.id);
      if (!product) return accumulator;
      return accumulator + (product?.product.price);
    }, 0);
    this.totalPrice = total;
  }

  getTotalQuantity():void {
    const cart = this.getCart();
    const total = cart.reduce((accumulator: number, currentValue: CartProduct) => {
      return accumulator += currentValue.quantity;
    },0);
    this.productQuantity = total;
  }

  validateCart(recap: RecapContent){
    // on envoie les données du panier dans un autre tableau de récap avant de supprimer le panier
    const cart = this.getCart();
    recap.products = cart;
    recap.recapPrice = this.totalPrice;
    this.resetCart;
    this.router.navigate(['/recapitulatif']);
  }

}
