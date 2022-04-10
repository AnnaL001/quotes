
import { Component, Input, OnInit } from '@angular/core';
import { Quote } from 'src/app/model/quote/quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  // Type assertions
  @Input() quote = {} as Quote;

  constructor() { }

  ngOnInit(): void {
  }

}
