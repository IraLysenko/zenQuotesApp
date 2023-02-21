import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { BalanceComponent } from './balance/balance.component';
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { MyQuotesComponent } from './my-quotes/my-quotes.component';
import { LoginComponent } from './login/login.component';
import { QuotesComponent } from './quotes/quotes.component';
import { RandomQuoteComponent } from './random-quote/random-quote.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from "@angular/forms";
import { SearchComponent } from './search/search.component';

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
    SearchComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        RouterModule.forRoot([
            {path: '', redirectTo: '/home', pathMatch: "full"},
            {path: 'home', component: HomeComponent},
            {path: 'my-quotes', component: MyQuotesComponent},
            {path: 'balance', component: BalanceComponent},
            {path: 'login', component: LoginComponent}
        ]),
        FontAwesomeModule,
        FormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
