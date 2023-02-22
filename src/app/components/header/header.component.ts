import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    selectedTableNumber!: number; // Initialise la variable avec la table à null

    constructor(private router: Router) { }

    redirectToModifyTable() {
        this.router.navigate(['/modify-table']);
    }

    redirectToCart() {
        this.router.navigate(['/cart']);
    }
}
