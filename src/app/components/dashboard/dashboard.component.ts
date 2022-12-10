import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private _usersService: UsersService ){}
    
  ngOnInit(): void{
    this.getUsers();
  }

  getUsers(){
      this._usersService.getUsers().subscribe(data=>{
        console.log(data)
      })
  }

  
}
