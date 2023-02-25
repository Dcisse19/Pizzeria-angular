import { Component, OnInit } from '@angular/core';
import { TableServiceService } from 'src/app/services/table-service.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showCart: boolean = true;

  constructor(public tableService: TableServiceService, public cartService: CartService, private router: Router, private location: Location) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const path = this.location.path();
        const regex = /recapitulatif/;
        this.showCart = !regex.test(path);
      });
  }

}


