import { Observable } from "rxjs/Observable";
import { ValidatorFn, AbstractControl } from "@angular/forms";
import { of } from "rxjs/observable/of";
import { map } from "rxjs/operators/map";

export function validPassword(control: AbstractControl) {
  return of("12345678910" === control.value).pipe(
    map(result =>
      (result ? { invalid: true } : null))
  );
}


export function ValidateForName(control: AbstractControl) {
  const expression: RegExp = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

  return of(expression.test(control.value)).pipe(
    map(result => (!result ? { invalid: true } : null)
    )
  );
}

export function ValidateForNic(control: AbstractControl) {
  const expression: RegExp = /[0-9]{9}[x|X|v|V]$/;

  return of(expression.test(control.value)).pipe(
    map(result => (!result ? { invalid: true } : null)
    )
  );
}
