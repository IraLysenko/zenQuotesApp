import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { Author } from '../../types/author.type';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
})
export class AuthorsComponent {
  faChevronDown = faChevronDown;
  authorsQuantity = 23;
  authorsFilter: string[] = [];

  @Input() authors!: Author[];
  @Output() addValueToFilter = new EventEmitter();

  trackByAuthorName = (index: number, item: Author) => item.name;

  showMoreAuthors() {
    if (this.authors?.length > this.authorsQuantity) {
      this.authorsQuantity += this.authorsQuantity;
    }
  }
}
