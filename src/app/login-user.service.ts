import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {
private baseUrl= "http://localhost:8080/user/login";
  constructor(private httpClient:HttpClient ) { }
loginUser(user:User):Observable<boolean>{
  console.log(user)
return this.httpClient.post<boolean>('${this.baseUrl}',user)
 }
}
