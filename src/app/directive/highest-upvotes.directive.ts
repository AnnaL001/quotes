import { Directive, ElementRef} from '@angular/core';
import { Quote } from '../model/quote/quote';

@Directive({
  selector: '[appHighestUpvotes]'
})
export class HighestUpvotesDirective {
  constructor(private element: ElementRef) {
    this.element.nativeElement.classList.add('border','border-success');
  }
}
