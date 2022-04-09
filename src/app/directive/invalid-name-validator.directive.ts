import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
  selector: '[appInvalidNameValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: InvalidNameValidatorDirective,
    multi: true
  }]
})
export class InvalidNameValidatorDirective implements Validator{
  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    let invalidRegex = /^\d+\D{0}$/;
    let invalidRegex2 = /^\D{0}\d+$/;
    const invalid = invalidRegex.test(control.value) || invalidRegex2.test(control.value);
    return invalid ? {invalidName: {value: control.value}} : null;
  }

}
