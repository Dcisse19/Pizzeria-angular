import { Component } from '@angular/core';
import { IProduct, PRODUCTS } from './mocks/products.mock';
import { CartService } from './services/cart/cart.service';
import { TableServiceService } from './services/table-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private cartService: CartService, private tableService: TableServiceService){}


  ngOnInit(){
    this.cartService.initCart();
    this.tableService. getSelectedTable();
  }
}
