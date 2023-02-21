import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { CustomizeComponent } from './pages/customize/customize.component';
import { HomeComponent } from './pages/home/home.component';
import { ModifyTableComponent } from './pages/modify-table/modify-table.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductsComponent } from './pages/products/products.component';
import { RecapComponent } from './pages/recap/recap.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"cart",
    component: CartComponent
  },
  {
    path:"modify-table",
    component: ModifyTableComponent
  },
  {
    path:"recap",
    component: RecapComponent
  },
  {
    path:"products",
    component: ProductsComponent
  },
  {
    path:"products/:id",
    component: CustomizeComponent
  },
  {
    path:"not-found",
    component: NotFoundComponent
  },
  // whitecard pour la 404
  {
    path:"**",
    redirectTo: "not-found"
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
