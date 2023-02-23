import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    selectedTableNumber!: number; // Initialise la variable 
    showLinks = true;


    constructor(private router: Router) {

        if (this.router.url === "/") {
            this.showLinks = false;
          } else {
            this.showLinks = true;
          }
    }

    redirectToModifyTable() {
        this.router.navigate(['/modify-table']);
    }

    redirectToCart() {
        this.router.navigate(['/cart']);
    }
}
