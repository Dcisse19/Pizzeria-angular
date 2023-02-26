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

  // Booléen utilisé pour contrôler l'affichage du footer
  hideFooter: boolean = true;

  constructor(private cartService: CartService, private tableService: TableServiceService, private router: Router, private location: Location) {}

  ngOnInit() {
    // Initialisation du panier et de la table sélectionnée
    this.cartService.initCart();
    this.tableService.getSelectedTable();
    this.tableService.redirectIfNoTable();

    // Abonnement à l'événement de changement de route
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        // Récupération du chemin d'accès actuel
        const path = window.location.pathname;
        // Expression régulière pour trouver certains chemins d'accès
        const regex = /(modify-table|recapitulatif)/;
        // Mise à jour du booléen pour contrôler l'affichage du footer
        this.hideFooter = !(path === '' || regex.test(path));
      });
  }

}

