import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-password-adder',
  templateUrl: './password-adder.component.html',
  styleUrls: ['./password-adder.component.css']
})


export class PasswordAdderComponent {
  form: FormGroup

  constructor() {
    this.form = new FormGroup({
      category: new FormControl(''),
      app: new FormControl(''),
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  onSubmit() {

    console.log(this.form.value)
  }

}

