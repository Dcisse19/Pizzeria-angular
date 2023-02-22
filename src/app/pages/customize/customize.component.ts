import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct, PRODUCTS } from 'src/app/mocks/products.mock';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.css']
})
export class CustomizeComponent {

  product!: IProduct;
  // product: IProduct = PRODUCTS[0].products[6];
  totalPrice! :number;

  constructor(
    private productService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(){
    this.getProduct();
    this.getTotalProductPrice();
    this.productService.createNewArray();
  }

  getProduct() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    const foundProduct = this.productService.getProductById(id);
    if (foundProduct) {
      this.product = foundProduct;
      console.log(this.product);
    } else {
      this.router.navigate(['/not-found']);
    }
  }

  getTotalProductPrice(){
    this.totalPrice = this.product.price/100;
    this.product.extras.forEach(extra => {
      this.totalPrice += (extra.quantity * (extra.additionalPrice/100));
    })
  }
}
