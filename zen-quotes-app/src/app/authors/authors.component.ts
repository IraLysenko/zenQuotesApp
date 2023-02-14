import { Component, Input } from '@angular/core';
import {Author} from "../../types/author.type";

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})

export class AuthorsComponent {
  @Input() authors: Author[] = [];
}
