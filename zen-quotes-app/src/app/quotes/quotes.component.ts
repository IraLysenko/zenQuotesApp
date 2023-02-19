import {Component, EventEmitter, Input, Output} from '@angular/core';
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
  @Input() activePage: number = 0;
  @Output() activePageDetect = new EventEmitter();
}
