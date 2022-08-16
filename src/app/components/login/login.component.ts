import { Component, OnInit } from '@angular/core';
import { UserService } from "../../shared/services/user.service";
import { switchMap } from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) { }

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
     )
     .subscribe( res => {
     console.log(res);
   });
  // localStorage.clear()
}
}
