import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  hideFooter: boolean = false;

  constructor(private location: Location) { }

  ngOnInit() {
    const path = this.location.path();
    this.hideFooter = (path.endsWith('') || path.endsWith('recapitulatif'));
  }
}

