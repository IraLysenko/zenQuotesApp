import {Component, OnInit} from '@angular/core';
import {QuotesService} from "../quotes.service";
import {Quote} from "../../types/quote.type";
import {Author} from "../../types/author.type";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit{
  title = "Inspiration";
  quotes: Quote[] = [];
  authors: Author[] = [];
  randomQuote: Quote = {author: "", text: ""};

  constructor(private quotesService: QuotesService) {}

  ngOnInit(): void {
    this.getQuotes();
  }

  getQuotes(): void {
    this.quotesService.getQuotes()
      .subscribe(quotes => {
        this.quotes = quotes.slice(1, 100);
        this.authors = Array.from(new Set(this.quotes.map(quote => {
          return { "authorName" : quote.author }
        })));
        this.randomQuote = this.quotes[Math.floor(Math.random()*this.quotes.length)]
      });
  }
}
