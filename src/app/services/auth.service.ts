import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';
import { IResponse } from '../interfaces/iresponse';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 constructor(private http: HttpClient) {}

  login(user:User): Observable<IResponse>{
    return this.http.post<IResponse>(`${environment.url}/login`, user);
  }
}
