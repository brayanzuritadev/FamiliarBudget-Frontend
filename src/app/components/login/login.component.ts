import { Component, inject } from '@angular/core';
import { UserService } from "../../services/user.service";
import { User } from 'src/app/interfaces/user';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _userService: UserService,
     private toastr: ToastrService,
     private router: Router) {}
    email: string = "";
    password: string = "";

  ngOnInit() {
   // this.userService.getUsers();
  }

  login(){
    //validamos que el usuario ingresa datos
    if(this.email =="" || this.password==""){
      this.toastr.error("Todos los campos son obligatorios", "Error");
      return
    }

    const user : User={
      email : this.email,
      password: this.password
    }

    this._userService.login(user).subscribe({
      next: (iresponse) =>{
        this.router.navigate(['/dashboard'])
        //obtenemos el token
        localStorage.setItem('token', iresponse.response)
      }
    })
  }
}
