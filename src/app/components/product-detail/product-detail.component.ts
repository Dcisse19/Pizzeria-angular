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

  classesApplied: boolean[] = [];

  ngOnInit(){
    this.convertToDecimal();
    this.setToFalse();
  }
  convertToDecimal(){
    this.price = this.product.price/100; 
  }

  setToFalse(){
    this.classesApplied.forEach(classApplied => {
      classApplied = false;
    })
  }

  switchIngredient(index:number){
    this.classesApplied[index] = !this.classesApplied;
  }
}
