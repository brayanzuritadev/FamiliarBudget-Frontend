import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {ToastrModule} from 'ngx-toastr'
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { NavDashboardComponent } from './components/shared/nav-dashboard/nav-dashboard.component';
import { DashboardUsersComponent } from './components/dashboard-users/dashboard-users.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserEditarComponent } from './components/user-editar/user-editar.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignInComponent,
    DashboardComponent,
    HomeComponent,
    HeaderComponent,
    NavDashboardComponent,
    DashboardUsersComponent,
    UserEditarComponent,
    UserDetailComponent,
  
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
