import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  @Output() quoteFormHidden = new EventEmitter<boolean>()

  constructor() { }

  hideQuoteForm(isHidden: boolean){
    this.quoteFormHidden.emit(isHidden);
  }

  ngOnInit(): void {
  }

}
