import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ILogin } from "../interfaces/login.interface";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _currentUser = new BehaviorSubject(null);

  constructor(private http: HttpClient) {
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

  getUsers(value: string) {
    return this.http.get('https://mentors-portal.herokuapp.com/auth/users', {
      headers: {
        Authorization: `Bearer ${value}`
      }
    })
  }

  get currentUser() {
    return this._currentUser.getValue()
  }

  set currentUser(value) {
    this._currentUser.next(value)
  }

}
