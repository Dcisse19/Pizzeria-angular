import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CartService } from './services/cart/cart.service';
import { TableServiceService } from './services/table-service.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  hideFooter: boolean = true;

  constructor(private cartService: CartService, private tableService: TableServiceService, private router: Router, private location: Location) {}

  ngOnInit() {
    this.cartService.initCart();
    this.tableService.getSelectedTable();
    this.tableService.redirectIfNoTable();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const path = window.location.pathname;
        const regex = /(modify-table|recapitulatif)/;
        this.hideFooter = !(path === '' || regex.test(path));
      });
  }

}
