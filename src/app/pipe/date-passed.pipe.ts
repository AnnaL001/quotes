import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePassed'
})
export class DatePassedPipe implements PipeTransform {

  transform(value: any): string {
    let date = new Date();
    // Retrieve dates without time
    let inputDate: any = new Date(value.getFullYear(), value.getMonth(), value.getDate())
    let dateTodayWithoutTime: any = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    // Get difference in seconds
    let datePassedInSeconds = (dateTodayWithoutTime - inputDate) * 0.001;
    var datePassed = datePassedInSeconds/86400;
    // Return results
    if(datePassed > 1 && value < dateTodayWithoutTime){
      return `${Math.floor(datePassed)} days ago`;
    } else {
      return "today"
    }
  }
}
