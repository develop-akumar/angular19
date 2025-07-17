import { AbstractControl, ValidationErrors } from "@angular/forms";

export function uppercaseValidator(control: AbstractControl): ValidationErrors | null {
const username = control.value as string;

if (username && username !== username.toUpperCase()) {
    control.setValue(username.toUpperCase());
    
  }
  return null
}