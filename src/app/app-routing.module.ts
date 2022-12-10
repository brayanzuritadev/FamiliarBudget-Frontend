import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CentralDashboardComponent } from './components/central-dashboard/central-dashboard.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';

//components
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

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
    path:'login',
    component: LoginComponent
  },
  {
    path: 'signIn', 
    component: SignInComponent
  },
  {
    path: 'dashboard', 
    component: DashboardComponent
  },
  {
    path: 'dashboard/1', 
    component: CentralDashboardComponent
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
