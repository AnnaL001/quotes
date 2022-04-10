import { Injectable } from '@angular/core';
import { Quote } from '../model/quote/quote';
import { quotes } from '../quote-list';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  setInitialQuotes() {
    localStorage.setItem('quotes', JSON.stringify(quotes));
  }

  getQuotes(): Quote[]{
    this.setInitialQuotes();
    return JSON.parse(localStorage.getItem('quotes') || '[]');
  }

  constructor() {}
}


