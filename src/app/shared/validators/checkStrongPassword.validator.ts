import { AbstractControl, ValidatorFn } from '@angular/forms';

export const PASSWORD_VALIDATION_PATTERN =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])$/;

export function checkPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): { checkPasswordValidator: boolean } | null => {
    let valid: boolean;
    if (!control.value || !control.value.length) {
      valid = true;
    } else {
      valid = PASSWORD_VALIDATION_PATTERN.test(control.value) && control.value.length <= 75;
    }
    return valid ? null : { checkPasswordValidator: true };
  };
}





    // const regEpx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])$/;
    //
