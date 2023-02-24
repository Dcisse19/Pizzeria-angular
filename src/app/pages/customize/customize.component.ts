import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IExtraIngredient, IProduct, PRODUCTS } from 'src/app/mocks/products.mock';
import { CartProduct, CartService } from 'src/app/services/cart/cart.service';
import { ProductsService } from 'src/app/services/products/products.service';
import { TableServiceService } from 'src/app/services/table-service.service';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.css']
})
export class CustomizeComponent {

  product!: IProduct;
  // product: IProduct = PRODUCTS[0].products[6];
  quantity:number = 1;
  totalPrice! :number;

  constructor(
    private productService: ProductsService,
    private cartService: CartService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private tableService : TableServiceService
  ) { }

  ngOnInit(){
    this.tableService.redirectIfNoTable();
    this.getProduct();
    if(this.product){
      this.totalPrice = this.product.price/100;
    }
    this.productService.createNewArray();
  }

  getProduct() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      const foundProduct = this.productService.getProductById(id);
    if (foundProduct) {
      this.product = foundProduct;
      // console.log(this.product);
    } else {
      this.router.navigate(['/not-found']);
    }
  }
  
  getTotalProductPrice(extra : IExtraIngredient, increase :boolean){
    this.totalPrice = this.product.price/100;
    if(increase){
      this.totalPrice += (extra.quantity * (extra.additionalPrice/100));
    } else {
      this.totalPrice -= (extra.additionalPrice/100);
    }
    this.product.price = this.totalPrice*100;
  }
  addToCart(){
   const cartProduct: CartProduct = {
    product: this.product!,
    quantity: this.quantity
   } 
    this.cartService.addProductToCart(cartProduct);
  }
}
