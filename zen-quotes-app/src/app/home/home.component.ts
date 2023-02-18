import {Component, OnInit} from '@angular/core';
import {QuotesService} from "../quotes.service";
import {Quote} from "../../types/quote.type";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  title = "Inspiration";
  quotes: Quote[] = [];
  authors: string[] = [];
  authorsFilter: string[] = [];
  randomQuote: Quote = {author: "", text: ""};
  quotesFiltered: Quote[] = [];
  quotesPerPage: number = 9;
  pagesArray: number[] = [];

  constructor(private quotesService: QuotesService) {}

  getAuthors() {
    this.authors = [...new Set(this.quotes.map(quote => quote.author))].sort();
  }

  generateRandomQuote() {
    this.randomQuote = this.quotes[Math.floor(Math.random()*this.quotes.length)]
  }

  getQuotesData(): void {
    this.quotesService.getQuotes()
      .subscribe(quotes => {
        this.quotes = quotes.slice(1, 100);
        this.getAuthors();
        this.generateRandomQuote();
        this.countPages();
      });
  }

  countPages(): void {
    let quotes = !this.quotesFiltered.length ? this.quotes : this.quotesFiltered;
    this.pagesArray = quotes.length > this.quotesPerPage ? ([...Array(Math.ceil(quotes.length / 9)).keys()]) : [];
  }

  ngOnInit(): void {
    this.getQuotesData();
  }

  randomQuoteNext(): void {
    this.generateRandomQuote();
  }

  addValueToFilter(e: HTMLInputElement) {
    this.authorsFilter = e.checked ? [...this.authorsFilter, e.value] : this.authorsFilter.filter(author => author !== e.value);
    this.quotesFiltered = this.quotes.filter(quote => this.authorsFilter.includes(quote.author));
    this.countPages();
  }
}
