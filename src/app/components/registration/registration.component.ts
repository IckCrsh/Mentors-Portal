import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { checkPasswordValidator } from "../../shared/validators/checkStrongPassword.validator";
import { confirmedValidator } from "../../shared/validators/confirmedValidator.validator";
import { UserService } from "../../shared/services/user.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup

  constructor(private fb: FormBuilder, private userService: UserService) {

  }

  ngOnInit(): void {
    this.setForm()
  }

  setForm() {
    this.registrationForm = this.fb.group({
      login: ['', { validators: [Validators.required, Validators.email], updateOn: "blur" }],
      password: ['', {
        validators: [Validators.minLength(7), Validators.required, checkPasswordValidator()],
        updateOn: "blur"
      }],
      confirmPassword: ['', Validators.required]
    }, {
      validator: [confirmedValidator('password', 'confirmPassword')],
    })
  }

  submit() {
    if (this.registrationForm.invalid) {
      this.registrationForm.markAsPristine();
      return
    }
    this.userService.registration({
      username: this.login.value,
      password: this.password.value
    }).subscribe(res => {

      //TODO Field for toaster

    })
  }

  get login(): FormControl {
    return this.registrationForm.get('login') as FormControl
  }

  get password(): FormControl {
    return this.registrationForm.get('password') as FormControl
  }

  get confirmPassword(): FormControl {
    return this.registrationForm.get('confirmPassword') as FormControl
  }
}
