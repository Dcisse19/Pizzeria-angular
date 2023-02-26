// Importation des dépendances nécessaires pour le composant
import { Component, OnInit } from '@angular/core';
import { TableServiceService } from 'src/app/services/table-service.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { filter } from 'rxjs/operators';

// Définition du composant
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // Déclaration d'une variable boolean qui détermine si le panier doit être affiché
  showCart: boolean = true;

  // Injection des services nécessaires pour le composant
  constructor(public tableService: TableServiceService, public cartService: CartService, private router: Router, private location: Location) {}

  // Code exécuté lors de l'initialisation du composant
  ngOnInit() {
    // Surveillance des événements de navigation du router
    this.router.events
      // Filtrage des événements pour ne prendre en compte que les NavigationEnd
      .pipe(filter(event => event instanceof NavigationEnd))
      // Action à exécuter lors de la survenue d'un événement de navigation
      .subscribe(() => {
        // Récupération du chemin actuel de l'application
        const path = this.location.path();
        // Définition d'une expression régulière pour tester si le chemin contient "recapitulatif"
        const regex = /recapitulatif/;
        // Mise à jour de la variable showCart en fonction du résultat de la comparaison avec l'expression régulière
        this.showCart = !regex.test(path);
      });
  }

}



