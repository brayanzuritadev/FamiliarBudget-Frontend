import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';

//components
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';


const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'', 
    redirectTo: 'home', 
    pathMatch: 'full'
  },
  {
    path: 'transactions',
    component: TransactionsComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'users/:id',
    component: DashboardComponent
  },
  {
    path: 'signIn', 
    component: SignInComponent
  },
  {
    path: 'dashboard/users', 
    component: DashboardComponent
  },
  {
    path: '**', 
    redirectTo: 'home', 
    pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
