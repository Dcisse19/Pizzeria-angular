import { Component, Input } from '@angular/core';
import { IProduct, ITag } from 'src/app/mocks/products.mock';

@Component({
  selector: 'app-tag-button',
  templateUrl: './tag-button.component.html',
  styleUrls: ['./tag-button.component.css']
})
export class TagButtonComponent {
@Input() element!:ITag;
@Input() products!: IProduct[];


orginalBtnColor = 'white';
orginalFontColor = 'black';
buttonColor= this.orginalBtnColor
fontColor=this.orginalFontColor
 
//filtrer les produits au click - ne marche pas
isSelected = false;//false pour afficher la liste de produits d'origine
filterProducts() {
  if (this.isSelected ) {
    this.products = this.products.filter(product => product.tags.some(tag => this.element.isSelected));
  } else {
    this.products = this.products;
  }
}
  
changeColor(): void {
   if (this.buttonColor===this.orginalBtnColor) {
    this.buttonColor= 'var(--dark-blue)';
    this.fontColor='white'
   }
else {
  this.buttonColor= this.orginalBtnColor;
  this.fontColor = this.orginalFontColor;
}
}
}


