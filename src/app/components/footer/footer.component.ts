// Importation des dépendances nécessaires pour le composant
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

// Définition du composant
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  // Déclaration d'une variable boolean qui détermine si le footer doit être masqué
  hideFooter: boolean = true;

  // Injection des services nécessaires pour le composant
  constructor(private router: Router,private location: Location) { }

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
        // Définition d'une expression régulière pour tester si le chemin contient "modify-table" ou "recapitulatif"
        const regex = /(modify-table|recapitulatif)/;
        // Mise à jour de la variable hideFooter en fonction du résultat de la comparaison avec l'expression régulière
        this.hideFooter = (path === '' || regex.test(path));
        // Affichage de la variable hideFooter dans la console pour faciliter le débogage
        console.log('FooterComponent hideFooter:', this.hideFooter);
      });
  }

}
