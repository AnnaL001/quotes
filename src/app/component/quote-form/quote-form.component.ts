import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from 'src/app/model/quote/quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = {} as Quote;
  @Output() quoteFormHidden = new EventEmitter<boolean>()
  @Output() createQuote = new EventEmitter()

  constructor() { }

  hideQuoteForm(isHidden: boolean){
    this.quoteFormHidden.emit(isHidden);
  }

  onSubmit(){
    this.createQuote.emit(this.newQuote);
  }

  ngOnInit(): void {
  }

}
