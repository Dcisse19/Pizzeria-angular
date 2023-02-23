import { Component } from '@angular/core';
import { IProductsByCategory, ITag, PRODUCTS, TAGS } from 'src/app/mocks/products.mock';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  categories: IProductsByCategory[]= PRODUCTS;
  tags: ITag[]= TAGS;

  receivedTags: ITag[]=[];
  index! :number;
  
  setReceivedTags(receivedTag:ITag) {
    if(receivedTag.isSelected){
    this.receivedTags.push(receivedTag);
    }
   else {
     const foundTag= this.receivedTags.find((tag)=>tag.id===receivedTag.id);
     if (foundTag){
      this.index=this.receivedTags.indexOf(foundTag);
      this.receivedTags.splice(this.index,1);
     }
    }
    console.log(this.receivedTags)
  }


}
