import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  hideFooter: boolean = true;

  constructor(private router: Router,private location: Location) { }

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const path = this.location.path();
        const regex = /(modify-table|recapitulatif)/;
        this.hideFooter = (path === '' || regex.test(path));
        console.log('FooterComponent hideFooter:', this.hideFooter);
      });
  }
}
