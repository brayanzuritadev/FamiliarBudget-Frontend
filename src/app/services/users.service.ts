import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { User } from '../interfaces/user';
import { Users } from '../interfaces/users';
import { IResponse } from '../interfaces/iresponse';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<Users[]>{
    const token= localStorage.getItem('token')
    console.log(token);
    const header = new HttpHeaders().set('Authorization',`Bearer ${token}`)
    return this.http.get<Users[]>(`${environment.url}/users`,{headers:header});
  }

  getUser(id:number): Observable<Users>{
    const token= localStorage.getItem('token')
    const header = new HttpHeaders().set('Authorization',`Bearer ${token}`)
    return this.http.get<Users>(`${environment.url}/users/${id}`,{headers:header});
  }

  createUser(user:Users) :Observable<IResponse>{
    console.log(user);
    return this.http.post<IResponse>(`${environment.url}/users`,user);
  }

  deleteUser(id:number):Observable<any>{
    return this.http.delete<any>(`${environment.url}/users/${id}`);
  }

  updateUser(id:string, changes: Partial<Users>){
    return this.http.put(`${environment.url}/users/${id}`,changes);
  }
}
