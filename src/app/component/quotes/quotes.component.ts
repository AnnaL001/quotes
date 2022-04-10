import { Component, OnInit, Input } from '@angular/core';
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

  displayForm(display: boolean){
    if(display){
      let form = document.getElementById('form');
      form?.classList.remove('hide');
    }
  }

  toggleQuoteDetails(index: number){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  ngOnInit(): void {
    this.quotes = this.quoteService.getQuotes();
  }

  increaseUpvote(upvote: boolean, index: number){
    if(upvote){
      this.quotes[index].upvote++;
    }
  }

  increaseDownvote(downvote: boolean, index: number){
    if(downvote){
      this.quotes[index].downvote++;
    }
  }

  hideForm(isHidden: boolean){
    if(isHidden){
      let form = document.getElementById("form");
      form?.classList.add('hide');
    }
  }

  addNewQuote(quote: Quote){
    quote.id = this.quotes.length + 1;
    quote.upvote = 0;
    quote.downvote = 0;
    quote.dateCreated = new Date();
    this.quotes.unshift(quote);
    console.log(this.quotes);
  }
}
