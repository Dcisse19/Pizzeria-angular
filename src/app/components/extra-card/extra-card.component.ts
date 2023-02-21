import { Component, Input } from '@angular/core';
import { IExtraIngredient } from 'src/app/mocks/products.mock';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-extra-card',
  templateUrl: './extra-card.component.html',
  styleUrls: ['./extra-card.component.css']
})
export class ExtraCardComponent {
  @Input() extra!: IExtraIngredient;

  extraPrice!: number;


  ngOnInit() {
    this.convertToDecimal();
  }
  convertToDecimal() {
    this.extraPrice = this.extra.additionalPrice / 100;
  }

  plusQuantity() {
    if (this.extra.quantity < this.extra.maxQuantity) {
      this.extra.quantity++;
    }
  }
  minusQuantity() {
    if (this.extra.quantity > 0) {
      this.extra.quantity--;
    }
  }

}


