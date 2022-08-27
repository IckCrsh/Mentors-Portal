import { Component, OnInit } from '@angular/core';
import { UserService } from "../../shared/services/user.service";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { checkPasswordValidator } from "../../shared/validators/checkStrongPassword.validator";
import { CookieService } from "ngx-cookie";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  isLoading = false;

  constructor(private userService: UserService, private fb: FormBuilder, private _cookieService: CookieService, private router: Router) {
  }

  ngOnInit(): void {
    this.setForm()
    this.userService.getCurrentUser().subscribe(res => {
      console.log(res)
    })
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

      .subscribe(res => {
        this.isLoading = false;
        this._cookieService.putObject('authorizationData', res);
        this.router.navigate(['/admin'])
      }, er => {
        this.isLoading = false;
      });
  }

  get login(): FormControl {
    return this.loginForm.get('login') as FormControl
  }

  get password(): FormControl {
    return this.loginForm.get('password') as FormControl
  }

}
