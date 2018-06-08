import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from "@angular/forms";

@Directive({
  selector: '[appSyncRegValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: SyncRegValidatorDirective, multi: true}]
})
export class SyncRegValidatorDirective implements Validator {

  constructor() {
  }

  @Input('appSyncRegValidator') forbidden;

  validate(control: AbstractControl) {
    let regexp = new RegExp(this.forbidden);
    let error = regexp.test(control.value);
    return error ? {syncRegValidator: true} : null;
  }

}
