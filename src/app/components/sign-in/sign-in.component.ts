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
  fieldsMssg: Boolean[] = [false, false, false, false]
  flagRequired: boolean = false;
  errorMessage: string = 'Se debe llenar los campos: ';
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

    if(this.validateFields()){
      return
    }

    //validamos que el usuario ingresa datos
    if(this.user[3] !=this.user[4]){
      this.toastr.error("las contraseñas no son iguales", "Error");
      return
    }

    console.log("eso:",this.user[0])



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

  validateFields(){
    this.errorMessage = 'Se debe llenar los campos: ';
    let b = false;

    if(this.user[0]===undefined){
      b = true;
      this.fieldsMssg[0] = true;
      this.flagRequired = true;
      this.errorMessage+= ' (Nombre)';
    }else{ this.fieldsMssg[0] = false; }

    if(this.user[1]===undefined){
      b = true;
      this.fieldsMssg[1] = true;
      this.flagRequired = true;
      this.errorMessage+= ' (Apellido)';
    }else{ this.fieldsMssg[1] = false; }

    if(this.user[2]===undefined){
      b = true;
      this.fieldsMssg[2] = true;
      this.flagRequired = true;
      this.errorMessage+= ' (Correo)';
    }else{ this.fieldsMssg[2] = false; }

    if(this.user[3]===undefined){
      b = true;
      this.fieldsMssg[3] = true;
      this.flagRequired = true;
      this.errorMessage+= ' (Contraseña)';
    }else{ this.fieldsMssg[3] = false; }

    if(this.user[5]===undefined){
      b = true;
      this.flagRequired = true;
      this.errorMessage+= ' (Rol)';
    }

    return b;
  }
}
