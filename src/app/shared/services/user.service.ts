import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ILogin } from "../interfaces/login.interface";
import { CookieService } from "ngx-cookie";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private _cookieService: CookieService) {
  }

  login(value: ILogin) {
    // @ts-ignore
    return this.http.post('https://mentors-portal.herokuapp.com/auth/login', {
      username: value.username,
      password: value.password
    })
  }

  registration(value: ILogin) {
    return this.http.post('https://mentors-portal.herokuapp.com/auth/registration', {
      username: value.username,
      password: value.password
    })
  }

  getUsers() {
    return this.http.get('https://mentors-portal.herokuapp.com/auth/users')
  }

  getCurrentUser() {
    return this.http.get('https://mentors-portal.herokuapp.com/auth/user')
  }

  getToken() {
    return this._cookieService.getObject('authorizationData')
  }

}
