import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class User {
  constructor(public status: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  authenticate(username, password) {
    return this.http
      .post<any>('http://localhost:8080/api/authenticate', { username, password })
      .pipe(
        map(userData => {
          localStorage.setItem('username', username);
          let tokenStr = 'Bearer ' + userData.token;
          localStorage.setItem('token', tokenStr);
          return userData;
        })
      );
  }

  isUserLoggedIn() {
    let user = localStorage.getItem('username');
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    localStorage.removeItem("username");
  }
}
