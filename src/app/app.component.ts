import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  handleFormDisplay(isDisplayed: boolean){
    if(isDisplayed){
      let form = document.getElementById("form");
      form?.classList.remove('hide');
    }
  }
}
