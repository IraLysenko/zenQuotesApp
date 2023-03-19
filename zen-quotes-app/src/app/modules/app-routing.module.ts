import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BalanceComponent } from '../layouts/balance/balance.component';
import { HomeComponent } from '../layouts/home/home.component';
import { LoginComponent } from '../layouts/login/login.component';
import { MyQuotesComponent } from '../layouts/my-quotes/my-quotes.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'my-quotes', component: MyQuotesComponent },
  { path: 'balance', component: BalanceComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
