import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { checkPasswordValidator } from "../../shared/validators/checkStrongPassword.validator";
import { confirmedValidator } from "../../shared/validators/confirmedValidator.validator";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.setForm()
  }

  setForm() {
    this.registrationForm = this.fb.group({
      login: ['ickizz@gmail.com', { validators: [Validators.required, Validators.email], updateOn: "blur" }],
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
    console.log(this.registrationForm);
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
