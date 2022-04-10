import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './component/quotes/quotes.component';
import { QuoteDetailsComponent } from './component/quote-details/quote-details.component';
import { QuoteFormComponent } from './component/quote-form/quote-form.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BannerComponent } from './component/banner/banner.component';
import { FormsModule } from '@angular/forms';
import { InvalidNameValidatorDirective } from './directive/invalid-name-validator.directive';
import { DatePassedPipe } from './pipe/date-passed.pipe';
import { HighestUpvotesDirective } from './directive/highest-upvotes.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteDetailsComponent,
    QuoteFormComponent,
    NavbarComponent,
    BannerComponent,
    InvalidNameValidatorDirective,
    DatePassedPipe,
    HighestUpvotesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
