import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Params, withDebugTracing } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';
import { UserCredencials } from 'src/app/interfaces/userCredencials';

import {Users} from '../../interfaces/users'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  @Output() userCliked: EventEmitter<any> = new EventEmitter();

  showUser(){
    console.log("mostrar usuario")
    this.userCliked.emit(this.user.email="este valor viene de dashboard component");
  }


  users: Users[]=[];
  user:Users={
    email: "",
    firstName: "",
    id:0,
    lastName: "",
    roleId: 0
  };  
  constructor(private _usersService: UsersService, private activeRouter:ActivatedRoute ){}
    
  ngOnInit(): void{

    this.fetchUsers();
  }

  fetchUsers(){
    this._usersService.getAllUsers().subscribe(data=>{
      this.users=data;
    })
  }
    pages: number = 1;

  deleteUser(id:number){
    this._usersService.deleteUser(id)
    .subscribe(rpt => {
      this.fetchUsers();
      //console.log(rpt)
    });
  }
  getToken():any{
    var credencial = new UserCredencials();
    return credencial.getToken();
  }


}
