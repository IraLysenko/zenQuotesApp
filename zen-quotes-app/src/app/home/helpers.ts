// @Todo
//  @Ira: when we run `ng test`, the tests in helpers.spect.ts fail.
//  Can you implement this function so that the tests succeed?
//  Thanks and best of luck! 🍀
import { orderBy, uniqBy } from 'lodash';

import { Author } from '../../types/author.type';
import { Quote } from '../../types/quote.type';

export function mapAuthorsFromQuotes(quotes: Quote[] | []): Author[] | [] {
  return quotes
    ? quotes.map((quote, index) => {
        return {
          id: quote.author ? quote.author.split(' ').join('-').toLowerCase() : `unknown-${index}`,
          name: quote.author || 'Unknown',
        };
      })
    : [];
}

export function makeAuthorsUnique(authors: Author[] | undefined): Author[] | [] {
  return authors ? uniqBy(authors, 'name') : [];
}

export function sortAuthors(authors: Author[] | undefined): Author[] | [] {
  return authors ? orderBy(authors, 'name', ['asc']) : [];
}

export function getAuthors(quotes: Quote[] | undefined): Author[] | [] {
  return quotes ? sortAuthors(makeAuthorsUnique(mapAuthorsFromQuotes(quotes))) : [];
}

export function generateRandomQuote(quotes: Quote[] | undefined): Quote {
  return quotes ? quotes[Math.floor(Math.random() * quotes.length)] : { author: '', text: '' };
}
