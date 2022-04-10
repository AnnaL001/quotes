import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePassed'
})
export class DatePassedPipe implements PipeTransform {

  transform(value: any): string {
    let date = new Date();
    let dateWithoutTime: any = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    var datePassedInSeconds = Math.abs(value - dateWithoutTime) * 0.001; // Convert milliseconds to seconds
    var datePassed = datePassedInSeconds/86400;

    if(datePassed > 1 && value > dateWithoutTime){
      return `${Math.floor(datePassed)} days ago`;
    } else {
      return "today"
    }
  }

}
