import { Component, OnInit } from '@angular/core';
import { TableServiceService } from 'src/app/services/table-service.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

showCart : boolean = true;

  constructor(public tableService: TableServiceService, public cartService: CartService, public router : Router) {}

  ngOnInit(){
    console.log(this.router);
    if(this.router.url.includes('recapitulatif')){
      this.showCart = false;
    }

  }
}

