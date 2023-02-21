import { Injectable } from '@angular/core';
import { IProduct, PRODUCTS } from 'src/app/mocks/products.mock';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() {}

  getProductsByCategory(){
  }

  getProductsByTag(){}

  getProductById(id:number) : IProduct | undefined {
    const foundProduct = PRODUCTS.find((product: IProduct) => product.id = id ); 
    console.log('Produit trouvé : ', foundProduct);
    return foundProduct;
  }
}
