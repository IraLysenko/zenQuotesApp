import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {BalanceComponent} from "./balance/balance.component";
import {MyQuotesComponent} from "./my-quotes/my-quotes.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: "full"},
  {path: 'home', component: HomeComponent},
  {path: 'my-quotes', component: MyQuotesComponent},
  {path: 'balance', component: BalanceComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
