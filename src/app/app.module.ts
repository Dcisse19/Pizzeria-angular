import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableFormComponent } from './components/table-form/table-form.component';
import { HeaderComponent } from './components/header/header.component';
import { TagButtonComponent } from './components/tag-button/tag-button.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ExtraCardComponent } from './components/extra-card/extra-card.component';
import { CartProductCardComponent } from './components/cart-product-card/cart-product-card.component';
import { HomeComponent } from './pages/home/home.component';
import { ModifyTableComponent } from './pages/modify-table/modify-table.component';
import { ProductsComponent } from './pages/products/products.component';
import { CustomizeComponent } from './pages/customize/customize.component';
import { CartComponent } from './pages/cart/cart.component';
import { RecapComponent } from './pages/recap/recap.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TableFormComponent,
    HeaderComponent,
    TagButtonComponent,
    ProductListComponent,
    ProductCardComponent,
    FooterComponent,
    ProductDetailComponent,
    ExtraCardComponent,
    CartProductCardComponent,
    HomeComponent,
    ModifyTableComponent,
    ProductsComponent,
    CustomizeComponent,
    CartComponent,
    RecapComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
