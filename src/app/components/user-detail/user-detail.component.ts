import { Component, Input } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Users } from 'src/app/interfaces/users';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {

    user: Users={
    email:"",
    firstName:"",
    lastName: "",
    roleId:0,
    id:0
   };

  /*users: object={}*/
  constructor(
    private _usersService: UsersService,
    private activeRoute:ActivatedRoute
    ){}
  

  
  ngOnInit(){
    
  }

  

  fetchUser(id: number){
    this.activeRoute.params.subscribe((params:Params) =>{
      const id = params['id'];
      this._usersService.getUser(id)
      .subscribe(user =>{
        this.user=user;
        console.log(user)
      });
      console.log("llamadas");
    })

    
  }

  updateUsers(){

    const updateUser : Partial<Users>= {
      password:"123",
    };

    /*this._usersService.updateUser("4",updateUser)
    .subscribe(user=> {
      //console.log(user);
      //this.user=user;
    });*/
  }

}

