import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct, PRODUCTS } from './mocks/products.mock';
import { CartService } from './services/cart/cart.service';
import { TableServiceService } from './services/table-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  hideFooter: boolean = true;

  constructor(private cartService: CartService, private tableService: TableServiceService, private router : Router, private location: Location){}


  ngOnInit(){
    this.cartService.initCart();
    this.tableService. getSelectedTable();
    this.tableService.redirectIfNoTable();

    const path = this.location.path();
    const regex = /(modify-table|recapitulatif)/;
    this.hideFooter = !(path === '' || regex.test(path));
  }
}
