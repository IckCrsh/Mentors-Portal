import { AbstractControl, ValidatorFn } from '@angular/forms';

export const PASSWORD_VALIDATION_PATTERN = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$/;


export function checkPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): { incorrectPassword: boolean } | null => {
    let valid: boolean;
    if (!control.value || !control.value.length) {
      valid = true;
    } else {
      valid = PASSWORD_VALIDATION_PATTERN.test(control.value);
    }
    return valid ? null : { incorrectPassword: true };
  };
}

