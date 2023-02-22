import { Injectable } from '@angular/core';
import { IProduct, IProductsByCategory, PRODUCTS } from 'src/app/mocks/products.mock';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

 

  constructor() { }

  // getProductsByCategory(categoryName: string): IProductsByCategory | undefined {
  //   const foundCategory = PRODUCTS.find((p: IProductsByCategory) => p.category === categoryName);
  //   return foundCategory;
  // }
  getProductsByTag() { }

  createNewArray(): IProduct[] {
    const products = PRODUCTS[0].products.concat(PRODUCTS[1].products,PRODUCTS[2].products)
    return products;
  }

  getProductById(id: number): IProduct | undefined {
    const products = this.createNewArray();
    const foundProduct = products.find((product: IProduct) => product.id === id)
    return foundProduct;
  }
}



