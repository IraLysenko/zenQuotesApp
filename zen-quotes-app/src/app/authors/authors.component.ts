import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Author} from "../../types/author.type";

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})

export class AuthorsComponent implements OnInit{
  @Input() authors: Author[] = [];
  authorsQuantity: number = 33;

  constructor() {
    console.log('onInit'+this.authors)
  }

  ngOnInit(): void {
    console.log('onInit'+this.authors.length)
  }

  showMoreAuthors() {
    if(this.authors.length > this.authorsQuantity) {
      this.authorsQuantity += this.authorsQuantity;
    }
  }

}
