import { Component, OnInit, Input } from '@angular/core';
import { Quote } from 'src/app/model/quote/quote';
import { quotes } from 'src/app/quote-list';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  // Type assertions
  quotes = [] as Quote[];

  /**
   * Function to display form when the 'Create new quote' button is clicked
   * @param display If user would like to display form
   */
  displayForm(display: boolean){
    if(display){
      let form = document.getElementById('form');
      form?.classList.remove('hide');
    }
  }

  /**
   * Function to toggle quote details
   * @param index Index of the quote in the quote list
   */
  toggleQuoteDetails(index: number){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  ngOnInit(): void {
    this.quotes = quotes;
  }

  /**
   * Function to increase upvotes
   * @param upvote If user would like to upvote a quote
   * @param index Index of a quote in the quote list
   */
  increaseUpvote(upvote: boolean, index: number){
    if(upvote){
      this.quotes[index].upvote++;
      // Reduce downvote if it is greater than 0 thus produce a canceling effect on downvotes
      if(this.quotes[index].downvote > 0){
        this.quotes[index].downvote--;
      }
    }
  }

  /**
   * Function to increase downvotes
   * @param downvote If user would like to downvote a quote
   * @param index Index of a quote in the quote list
   */
  increaseDownvote(downvote: boolean, index: number){
    if(downvote){
      this.quotes[index].downvote++;
      // Reduce upvote if it is greater than 0 thus produce a canceling effect on upvotes
      if(this.quotes[index].upvote > 0){
        this.quotes[index].upvote--;
      }
    }
  }

  /**
   * Function to hide form when x-mark icon is clicked
   * @param isHidden If user would like to hide form
   */
  hideForm(isHidden: boolean){
    if(isHidden){
      let form = document.getElementById("form");
      form?.classList.add('hide');
    }
  }

  /**
   * Function to add quote to the beginning of the quote list
   * @param quote Quote to be added
   */
  addNewQuote(quote: Quote){
    quote.id = this.quotes.length + 1;
    quote.upvote = 0;
    quote.downvote = 0;
    this.quotes.unshift(quote);
    console.log(this.quotes);
  }

  deleteQuote(isTobeDeleted: boolean, index: number){
    if(isTobeDeleted){
      let toDelete = confirm(`Are you sure you want to delete the quote: ${this.quotes[index].quoteText}?`);
      if(toDelete){
        this.quotes.splice(index, 1);
      }
    }
  }
}
