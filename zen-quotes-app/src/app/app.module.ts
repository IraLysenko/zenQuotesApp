import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { BalanceComponent } from './balance/balance.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyQuotesComponent } from './my-quotes/my-quotes.component';
import { QuotesComponent } from './quotes/quotes.component';
import { RandomQuoteComponent } from './random-quote/random-quote.component';
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';

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
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'my-quotes', component: MyQuotesComponent },
      { path: 'balance', component: BalanceComponent },
      { path: 'login', component: LoginComponent },
    ]),
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
