import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeywordsComponent } from './keywords/keywords.component';
import { AuthorsComponent } from './authors/authors.component';
import { RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { BalanceComponent } from './balance/balance.component';
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    KeywordsComponent,
    AuthorsComponent,
    HomeComponent,
    BalanceComponent,
    SidebarNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'keywords', component: KeywordsComponent},
      {path: 'authors', component: AuthorsComponent},
      {path: 'balance', component: BalanceComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
