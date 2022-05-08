import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result: number | undefined;
  resultText: string | undefined;

  form = new FormGroup({
    control2: new FormControl(null, Validators.required),
    control1: new FormControl(null, Validators.required),
    controlText: new FormControl(null),
  });

  onSum(): void {
    if (this.form.valid) {
      const { control1, control2 } = this.form.value;
      this.result = control1 + control2;
    }
  }

  onTitleCase(): void {
    const control = this.form.get('controlText');
    if (!!control) {
      const value: string = control?.value || '';
      const result = value
        .split(' ')
        .map(v => v.substring(0, 1).toUpperCase() + v.substring(1, v.length).toLowerCase()).join(' ');
      this.resultText = result;
      control.patchValue(result);
    }
  }
}
