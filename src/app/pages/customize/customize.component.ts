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

  product :IProduct = PRODUCTS[2];

  constructor(   
     private productService: ProductsService,
     private activatedRoute: ActivatedRoute,
     private router: Router
    ){}

  // getProduct() {
  //   const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  //   const foundProduct = this.productService.getProductById(id);
  //   foundProduct ? this.product = foundProduct : this.router.navigate(['/not-found']);
  // }
}
