import {AbstractControl, AsyncValidatorFn, ValidatorFn} from "@angular/forms";
import {Subject} from "rxjs/Subject";

export function asyncRegValidator(regExp: RegExp): AsyncValidatorFn {
  return (control: AbstractControl) => {
    let testSource = new Subject<any>();
    setTimeout(() => {
      const error = regExp.test(control.value);
      testSource.next(error ? {syncRegValidator: true} : null);
      testSource.complete();
    }, 2000);
    return testSource;
  };
}
