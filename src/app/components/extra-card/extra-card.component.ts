import { Component, Input } from '@angular/core';
import { IExtraIngredient } from 'src/app/mocks/products.mock';
import { CustomizeComponent } from 'src/app/pages/customize/customize.component';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-extra-card',
  templateUrl: './extra-card.component.html',
  styleUrls: ['./extra-card.component.css']
})
export class ExtraCardComponent {
  @Input() extra!: IExtraIngredient;

  extraPrice!: number;

  constructor(private customizeComponent : CustomizeComponent){}
  ngOnInit() {
    this.convertToDecimal();
    this.resetExtraQuantity();
  }
  convertToDecimal() {
    this.extraPrice = this.extra.additionalPrice / 100;
  }

  resetExtraQuantity(){
    this.extra.quantity = 0;
}
  plusQuantity() {
    if (this.extra.quantity < this.extra.maxQuantity) {
      this.extra.quantity++;
      this.customizeComponent.getTotalProductPrice(this.extra, true);
    }
  }
  minusQuantity() {
    if (this.extra.quantity > 0) {
      this.extra.quantity--;
      this.customizeComponent.getTotalProductPrice(this.extra, false);
    }
  }

}


