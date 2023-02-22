import { Component, Input } from '@angular/core';
import { ITag } from 'src/app/mocks/products.mock';

@Component({
  selector: 'app-tag-button',
  templateUrl: './tag-button.component.html',
  styleUrls: ['./tag-button.component.css']
})
export class TagButtonComponent {
@Input() element!:ITag;

}
