import {Component, Input, OnInit, Output} from '@angular/core';
import {Author} from "../../types/author.type";

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})

export class AuthorsComponent {
  @Input() authors: Author[] = [];
  authorsQuantity: number = 33;

  showMoreAuthors() {
    if(this.authors.length > this.authorsQuantity) {
      this.authorsQuantity += this.authorsQuantity;
    }
  }
}
