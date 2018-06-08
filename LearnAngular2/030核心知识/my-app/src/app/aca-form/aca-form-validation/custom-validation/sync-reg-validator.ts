import {AbstractControl, ValidatorFn} from "@angular/forms";

export function syncRegValidator(regExp: RegExp): ValidatorFn {
  return (control: AbstractControl) => {
    const error = regExp.test(control.value);
    return error ? {syncRegValidator: true} : null;
  };
}
