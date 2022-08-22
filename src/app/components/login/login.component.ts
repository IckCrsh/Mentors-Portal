import { Component, OnInit } from '@angular/core';
import { UserService } from "../../shared/services/user.service";
import { switchMap } from "rxjs";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { checkPasswordValidator } from "../../shared/validators/checkStrongPassword.validator";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  isLoading = false;

  constructor(private userService: UserService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.setForm()
  }

  setForm() {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(7), checkPasswordValidator()]]
    })
  }

  submit() {

    this.isLoading = true;

    const dataToBackend = {
      username: this.login.value,
      password: this.password.value
    }

    this.userService.login(dataToBackend)
      .pipe(
        switchMap(item => {
          // @ts-ignore
          return this.userService.getCurrentUser(item.token)
        }),
      )
      .subscribe(res => {
        this.isLoading = false;
        console.log(res);
      }, er => {
        this.isLoading = false;
        console.log(er)
      });
  }

  get login(): FormControl {
    return this.loginForm.get('login') as FormControl
  }

  get password(): FormControl {
    return this.loginForm.get('password') as FormControl
  }

}
