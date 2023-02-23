import { Component, Input } from '@angular/core';
import { IProduct} from 'src/app/mocks/products.mock';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products!: IProduct[];
  

}
