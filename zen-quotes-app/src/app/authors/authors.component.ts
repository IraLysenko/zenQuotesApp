import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Author} from "../../types/author.type";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import {CheckboxControlValueAccessor} from "@angular/forms";

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})

export class AuthorsComponent {
  faChevronDown = faChevronDown;
  authorsQuantity: number = 23;
  authorsFilter: string[] = [];

  @Input() authors: string[] = [];
  @Output() addValueToFilter = new EventEmitter();

  showMoreAuthors() {
    if(this.authors.length > this.authorsQuantity) {
      this.authorsQuantity += this.authorsQuantity;
    }
  }
}
