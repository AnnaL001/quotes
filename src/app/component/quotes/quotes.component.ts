import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/model/quote/quote';
import { QuoteService } from 'src/app/service/quote.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  // Type assertions
  quotes = [] as Quote[];

  constructor(private quoteService: QuoteService) { }

  ngOnInit(): void {
    this.quotes = this.quoteService.getQuotes();
    console.log(this.quotes);
  }

}
