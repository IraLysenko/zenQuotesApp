import { Component, OnInit } from '@angular/core';

import { Quote } from '../../../types/quote.type';
import { QuotesService } from '../../services/quotes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'Inspiration';
  quotes: Quote[] = [];
  authors: string[] = [];
  authorsFilter: string[] = [];
  randomQuote: Quote = { author: '', text: '' };
  quotesFiltered: Quote[] = [];
  quotesPerPage = 9;
  pagesArray: number[] = [];
  activePage = 0;

  constructor(private quotesService: QuotesService) {}

  getAuthors(quotes: Quote[]) {
    return [...new Set(quotes.map((quote) => quote.author))].sort();
  }

  setAuthors(authors: string[]) {
    this.authors = authors;
  }

  generateRandomQuote() {
    this.randomQuote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
  }

  getQuotesData(): void {
    this.quotesService.getQuotes().subscribe((quotes) => {
      this.quotes = quotes.slice(1, 100);
      this.setAuthors(this.getAuthors(this.quotes));
      this.generateRandomQuote();
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
    this.generateRandomQuote();
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
