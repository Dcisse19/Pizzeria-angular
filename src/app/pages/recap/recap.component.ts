import { Component } from '@angular/core';
import { CartProduct } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.css']
})
export class RecapComponent {
  cart!: CartProduct[];
  totalPrice!: number;

  ngOnInit() {
    console.log('panier', this.cart);
    console.log('total', this.totalPrice);
  }
}
