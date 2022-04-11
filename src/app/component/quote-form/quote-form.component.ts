import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quote } from 'src/app/model/quote/quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = {} as Quote;
  @Output() quoteFormHidden = new EventEmitter<boolean>()
  @Output() createQuote = new EventEmitter<Quote>()

  constructor() { }

  hideQuoteForm(isHidden: boolean){
    this.quoteFormHidden.emit(isHidden);
  }

  onSubmit(form: NgForm){
    let sentQuote = new Quote(0, form.value.quoteText, form.value.author, form.value.submittedBy, new Date());
    this.createQuote.emit(sentQuote);
    form.reset();
  }

  ngOnInit(): void {
  }

}
