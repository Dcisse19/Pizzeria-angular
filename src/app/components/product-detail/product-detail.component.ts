import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/mocks/products.mock';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  @Input() product!: IProduct;
  price!: number;

  ngOnInit(){
    this.convertToDecimal();
  }
  convertToDecimal(){
    
    this.price = this.product.price/100; 
  }
}
