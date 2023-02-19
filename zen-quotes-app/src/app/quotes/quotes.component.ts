import {Component, Input} from '@angular/core';
import {Quote} from "../../types/quote.type";

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent {
  @Input() quotes: Quote[] = [];
  @Input() quotesPerPage: number = 0;
  @Input() pagesArray: number[] = [];

  activePage: number = 0;

  activePageDetect(page: number) {
    this.activePage = page;
  }
}
