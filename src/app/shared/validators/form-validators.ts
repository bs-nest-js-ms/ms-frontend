import { FormGroup } from '@angular/forms';

export class FormValidators {
  public isValidField = (form: FormGroup, field: string) => {
    return form.controls[field].errors && form.controls[field].touched;
  };

  public getFieldError = (form: FormGroup, field: string): string | null => {
    if (!form.controls[field]) return null;

    const errors = form.controls[field].errors || {};

    // console.log(errors);
    
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return `${field} is required`;
        case 'minlength':
          return `${field} have ${errors['minlength']['actualLength']},but must be have ${errors['minlength']['requiredLength']} characters at least`;
        case 'min':
          return `${field} must be ${errors['min']['min']} at least`;
        default:
          return '';
      }
    }
    return '';
  };
}
