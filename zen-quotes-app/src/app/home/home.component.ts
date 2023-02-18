import {Component, OnChanges, OnInit} from '@angular/core';
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
      });
  }

  ngOnInit(): void {
    this.getQuotesData();
  }

  randomQuoteNext(): void {
    this.generateRandomQuote();
  }

  addValueToFilter(value: string) {
    this.authorsFilter = [...this.authorsFilter, value];
    const filteredQuotes = this.quotes.filter(quote => this.authorsFilter.includes(quote.author));
    this.quotesFiltered = filteredQuotes;
  }
}
