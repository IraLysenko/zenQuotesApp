import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Quote } from '../../../types/quote.type';

@Component({
  selector: 'app-random-quote',
  templateUrl: './random-quote.component.html',
  styleUrls: ['./random-quote.component.scss'],
})
export class RandomQuoteComponent {
  @Input() randomQuote: Quote = { author: '', text: '' };
  @Output() randomQuoteNext = new EventEmitter();
}
