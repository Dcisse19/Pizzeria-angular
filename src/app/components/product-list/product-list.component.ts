import { Component } from '@angular/core';
import { PRODUCTS } from 'src/app/mocks/products.mock';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
products = PRODUCTS;
}
