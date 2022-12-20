import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { isObject } from './type-helper';

export class ReactiveFormHelper {
  static buildFormGroup(
    object: Record<string, any>,
    formGroup: FormGroup,
    replace = false
  ): void {
    Object.entries(object).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        if (replace || !(formGroup.get(key) instanceof FormArray)) {
          formGroup.setControl(key, new FormArray([]));
        }
        this.buildFormArray(value, formGroup.get(key) as FormArray);
      } else if (isObject(value)) {
        if (replace || !(formGroup.get(key) instanceof FormGroup)) {
          formGroup.setControl(key, new FormGroup({}));
        }
        this.buildFormGroup(value, formGroup.get(key) as FormGroup);
      } else if (replace || !(formGroup.get(key) instanceof FormControl)) {
        formGroup.setControl(key, new FormControl(value));
      }
    });
  }

  static buildFormArray(
    array: any[],
    formArray: FormArray,
    replace = false
  ): void {
    array.forEach((item, index) => {
      if (Array.isArray(item)) {
        if (replace || !(formArray.at(index) instanceof FormArray)) {
          formArray.setControl(index, new FormArray([]));
        }
        this.buildFormArray(item, formArray.at(index) as FormArray);
      } else if (isObject(item)) {
        if (replace || !(formArray.at(index) instanceof FormGroup)) {
          formArray.setControl(index, new FormGroup({}));
        }
        this.buildFormGroup(item, formArray.at(index) as FormGroup);
      } else if (replace || !(formArray.at(index) instanceof FormControl)) {
        formArray.setControl(index, new FormControl(item));
      }
    });
  }

  static markFormGroupAsDirty(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach((control) => {
      if (control instanceof FormArray) {
        this.markFormArrayAsDirty(control);
      } else if (control instanceof FormGroup) {
        this.markFormGroupAsDirty(control);
      } else {
        control.markAsDirty();
      }
    });
  }

  static markFormArrayAsDirty(formArray: FormArray): void {
    formArray.controls.forEach((control) => {
      if (control instanceof FormArray) {
        this.markFormArrayAsDirty(control);
      } else if (control instanceof FormGroup) {
        this.markFormGroupAsDirty(control);
      } else {
        control.markAsDirty();
      }
    });
  }

  static markFormGroupAsTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach((control) => {
      if (control instanceof FormArray) {
        this.markFormArrayAsTouched(control);
      } else if (control instanceof FormGroup) {
        this.markFormGroupAsTouched(control);
      } else {
        control.markAsTouched();
      }
    });
  }

  static markFormArrayAsTouched(formArray: FormArray): void {
    formArray.controls.forEach((control) => {
      if (control instanceof FormArray) {
        this.markFormArrayAsTouched(control);
      } else if (control instanceof FormGroup) {
        this.markFormGroupAsTouched(control);
      } else {
        control.markAsTouched();
      }
    });
  }

  static eachControlRecursive(
    formGroupOrArray: FormGroup | FormArray,
    callbackfn: (control: AbstractControl) => void
  ): void {
    const controls =
      formGroupOrArray instanceof FormGroup
        ? Object.values(formGroupOrArray.controls)
        : formGroupOrArray.controls;

    controls.forEach((control) => {
      if (control instanceof FormGroup || control instanceof FormArray) {
        this.eachControlRecursive(control, callbackfn);
      } else {
        callbackfn(control);
      }
    });
  }
}
