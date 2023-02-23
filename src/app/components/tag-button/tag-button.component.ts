import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITag } from 'src/app/mocks/products.mock';

@Component({
  selector: 'app-tag-button',
  templateUrl: './tag-button.component.html',
  styleUrls: ['./tag-button.component.css']
})
export class TagButtonComponent {
@Input() element!:ITag;
@Output() tagName= new EventEmitter();


switchTag() {
  this.element.isSelected=!this.element.isSelected;
  this.tagName.emit(this.element);
}
}





