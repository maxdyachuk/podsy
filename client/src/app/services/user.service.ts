import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) { }

  addUser(userCredentials: User): Observable<HttpResponse<any>> {
      return this.http.post<User>(this.baseUrl, userCredentials, { observe: 'response'});
  }
}
