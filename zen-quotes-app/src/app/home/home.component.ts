import { Component, OnInit } from '@angular/core';

import { Author } from '../../types/author.type';
import { Quote } from '../../types/quote.type';
import { QuotesService } from '../quotes.service';
import { generateRandomQuote, getAuthors } from './helpers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'Inspiration';
  quotes: Quote[] = [];
  authors: Author[] = [];
  authorsFilter: string[] = [];
  randomQuote: Quote = { author: '', text: '' };
  quotesFiltered: Quote[] = [];
  quotesPerPage = 9;
  pagesArray: number[] = [];
  activePage = 0;

  constructor(private quotesService: QuotesService) {}

  setAuthors(authors: Author[]) {
    this.authors = authors;
  }

  setRandomQuote(quotes: Quote[]) {
    this.randomQuote = generateRandomQuote(quotes);
  }

  getQuotesData(): void {
    this.quotesService.getQuotes().subscribe((quotes) => {
      this.quotes = quotes.slice(1, 100);
      this.setAuthors(getAuthors(this.quotes));
      this.setRandomQuote(this.quotes);
      this.countPages();
    });
  }

  countPages(): void {
    const quotes = !this.quotesFiltered.length ? this.quotes : this.quotesFiltered;
    this.pagesArray =
      quotes.length > this.quotesPerPage
        ? [...Array(Math.ceil(quotes.length / this.quotesPerPage)).keys()]
        : [];
  }

  ngOnInit(): void {
    this.getQuotesData();
  }

  randomQuoteNext(): void {
    this.setRandomQuote(this.quotes);
  }

  addValueToFilter(e: HTMLInputElement) {
    this.authorsFilter = e.checked
      ? [...this.authorsFilter, e.value]
      : this.authorsFilter.filter((author) => author !== e.value);
    this.quotesFiltered = this.quotes.filter((quote) => this.authorsFilter.includes(quote.author));
    this.activePage = 0;
    this.countPages();
  }

  activePageDetect(page: number) {
    this.activePage = page;
  }
}
