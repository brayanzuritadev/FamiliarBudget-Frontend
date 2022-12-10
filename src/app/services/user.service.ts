import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';
import { IResponse } from '../interfaces/iresponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 constructor(private http: HttpClient) {}

  /*getUsers() {
    this.http.get("https://localhost:7249/api/users").subscribe(data => {
      console.log(data);
    });
  }*/

  login(user:User): Observable<IResponse>{
    return this.http.post<IResponse>("https://localhost:7249/api/login", user);
  }
}
