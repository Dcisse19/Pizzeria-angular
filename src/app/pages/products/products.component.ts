import { Component } from '@angular/core';
import { IProductsByCategory, PRODUCTS } from 'src/app/mocks/products.mock';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  categories: IProductsByCategory[]= PRODUCTS;
}
