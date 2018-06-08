import {Directive, Input} from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS} from "@angular/forms";
import {Subject} from "rxjs/Subject";

@Directive({
  selector: '[appAsyncRegValidator]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: AsyncRegValidatorDirective, multi: true}]
})
export class AsyncRegValidatorDirective implements AsyncValidator {

  constructor() {
  }

  @Input('appAsyncRegValidator') forbidden;

  validate(control: AbstractControl) {
    let regexp = new RegExp(this.forbidden);
    let testSource = new Subject<any>();
    setTimeout(() => {
      const error = regexp.test(control.value);
      testSource.next(error ? {syncRegValidator: true} : null);
      testSource.complete();
    }, 2000);
    return testSource;
  }

}
