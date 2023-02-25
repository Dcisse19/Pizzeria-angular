import { Component } from '@angular/core';
import { IProduct, IProductsByCategory, ITag, PRODUCTS, TAGS } from 'src/app/mocks/products.mock';
import { ProductsService } from 'src/app/services/products/products.service';
import { TableServiceService } from 'src/app/services/table-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  categories!: IProductsByCategory[];
  filteredProducts: IProduct[] = [];
  tags: ITag[] = TAGS;

  receivedTags: ITag[] = [];
  index!: number;
  
  constructor(private productsService: ProductsService, private tableService: TableServiceService) {
  }
  
  ngOnInit() {
    this.tableService.redirectIfNoTable();
    this.getProductsByTag(this.receivedTags);
  }

  ngOnDestroy(){
    this.receivedTags.forEach(tag => {tag.isSelected = false});
  }

  setReceivedTags(receivedTag: ITag) {
    if (receivedTag.isSelected) {
      this.receivedTags.push(receivedTag);
    } else {
      const foundTag = this.receivedTags.find(
        (tag) => tag.id === receivedTag.id
      );
      if (foundTag) {
        this.index = this.receivedTags.indexOf(foundTag);
        this.receivedTags.splice(this.index, 1);
      }
    }
    this.getProductsByTag(this.receivedTags);
  }
  
  getProductsByTag(selectedTags: ITag[]) {
    if (selectedTags.length > 0) {
      this.categories = PRODUCTS.map((category) => {
        return {
          ...category,
          products: category.products.filter((product) => {
            return selectedTags.some((selectedTag) =>{
              return product.tags.includes(selectedTag.nom);
            })
          })
        }
      })

    } else {
      this.categories = PRODUCTS;
    }
    console.log(this.categories);
  }
}
  