import { Component } from '@angular/core';
import { Users } from 'src/app/interfaces/users';

import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  user: string[] = []
  constructor(
    private toastr: ToastrService,
    private userService:UsersService,
    private router: Router
    ){}

  ngOnInit(){}
  
  mostrar : boolean = false;
  showInputFamilyCode(){
      this.mostrar = true
  }

  createUser(){
    //validamos que el usuario ingresa datos
    if(this.user[3] !=this.user[4]){
      this.toastr.error("las contraseñas no son iguales", "Error");
      return
    }

    const users : Users={
      id:0,
      firstName : this.user[0],
      lastName: this.user[1],
      email:this.user[2],
      password: this.user[3],
      roleId: Number(this.user[5]),
    }
    
    console.log(users)

    this.userService.createUser(users).subscribe({
      
      next: (iresponse) =>{
        this.router.navigate(['/dashboard/users'])
        //obtenemos el token
        localStorage.setItem('token', iresponse.response)
      }
    })
  }
}
