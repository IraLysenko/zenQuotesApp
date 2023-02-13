import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {KeywordsComponent} from "./keywords/keywords.component";
import {AuthorsComponent} from "./authors/authors.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {BalanceComponent} from "./balance/balance.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: "full"},
  {path: 'home', component: HomeComponent},
  {path: 'keywords', component: KeywordsComponent},
  {path: 'authors', component: AuthorsComponent},
  {path: 'balance', component: BalanceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
