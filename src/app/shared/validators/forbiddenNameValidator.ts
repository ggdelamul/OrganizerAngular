import { AbstractControl, ValidatorFn } from '@angular/forms';

export function forbiddenNameValidator(): ValidatorFn {
  const forbiddenNames: RegExp[] = [/admin/i, /imbecile/i];

  return (control: AbstractControl<string>): { [key: string]: any } | null => {
    
    const forbidden = forbiddenNames.some((pattern) =>
      pattern.test(control.value)
    );

    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}
