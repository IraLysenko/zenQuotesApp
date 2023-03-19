import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from '../app.component';
import { RandomQuoteComponent } from '../components/random-quote/random-quote.component';
import { AuthorsComponent } from '../containers/authors/authors.component';
import { QuotesComponent } from '../containers/quotes/quotes.component';
import { SidebarNavComponent } from '../containers/sidebar-nav/sidebar-nav.component';
import { BalanceComponent } from '../layouts/balance/balance.component';
import { HomeComponent } from '../layouts/home/home.component';
import { LoginComponent } from '../layouts/login/login.component';
import { MyQuotesComponent } from '../layouts/my-quotes/my-quotes.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    HomeComponent,
    BalanceComponent,
    SidebarNavComponent,
    MyQuotesComponent,
    LoginComponent,
    QuotesComponent,
    RandomQuoteComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FontAwesomeModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
