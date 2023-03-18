// @Todo
//  @Ira: when we run `ng test`, the tests in helpers.spect.ts fail.
//  Can you implement this function so that the tests succeed?
//  Thanks and best of luck! 🍀
import * as _ from 'lodash';

import { Author } from '../../types/author.type';
import { Quote } from '../../types/quote.type';

export function mapAuthorsFromQuotes(quotes: Quote[] | []): Author[] {
  return quotes
    ? quotes.map((quote) => {
        return { name: quote.author };
      })
    : [];
}

export function makeAuthorsUnique(authors: Author[] | undefined): Author[] | [] {
  return authors ? [...new Set(authors)] : [];
}

export function sortAuthors(authors: Author[] | undefined): Author[] | [] {
  return authors ? _.orderBy(authors, 'name', ['asc']) : [];
}

export function getAuthors(quotes: Quote[] | undefined): Author[] | [] {
  return quotes ? sortAuthors(makeAuthorsUnique(mapAuthorsFromQuotes(quotes))) : [];
}

export function generateRandomQuote(quotes: Quote[] | undefined): Quote {
  return quotes ? quotes[Math.floor(Math.random() * quotes.length)] : { author: '', text: '' };
}
