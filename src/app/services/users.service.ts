import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]>{
    const token= localStorage.getItem('token')
    console.log(token);
    const header = new HttpHeaders().set('Authorization',`Bearer ${token}`)
    return this.http.get<User[]>('https://localhost:7249/api/users',{headers:header});
  }
}
