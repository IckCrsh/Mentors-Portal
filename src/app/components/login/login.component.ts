import { Component, OnInit } from '@angular/core';
import { UserService } from "../../shared/services/user.service";
import { switchMap, tap, toArray } from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  submit() {
    // TODO Удалить, коли створим логин компонент
    this.userService.login({
      username: 'ickizz@gmail.com',
      password: '!Ickizz17'
    })
      .pipe(
        switchMap(item => {
          // @ts-ignore
          return this.userService.getUsers(item.token)
        }),
        tap(item => {
          // @ts-ignore
          const currentUser = item.find(element => element.username == 'ickizz@gmail.com')
          this.userService.currentUser = currentUser;
        })
      )
      .subscribe(res => {

        console.log(res);
      });
  }
}
