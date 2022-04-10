
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from 'src/app/model/quote/quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  // Type assertions
  @Input() quote = {} as Quote;
  @Output() quoteUpvote = new EventEmitter<boolean>();
  @Output() quoteDownvote = new EventEmitter<boolean>();

  upvoteAQuote(upvote: boolean){
    this.quoteUpvote.emit(upvote)
  }

  downvoteAQuote(downvote: boolean){
    this.quoteDownvote.emit(downvote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
