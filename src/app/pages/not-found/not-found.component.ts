import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {
  ngOnInit() {
    const cheese = document.querySelector('.cheese') as HTMLElement;
    let deg = 0;

    function spin() {
      setInterval(() => {
        deg++;
        if (deg >= 360) {
          deg = 0;
        } else {
          cheese.style.transform = `rotate(${deg}deg)`;
        }
      }, 50);
    }

    spin();
  }
}
