import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { PasswordEditorService, UserData } from 'src/app/password-editor.service';
import { PasswordItemComponent } from '../password-item/password-item.component';

@Component({
  selector: 'app-password-adder',
  templateUrl: './password-adder.component.html',
  styleUrls: ['./password-adder.component.css'],
  providers: [PasswordEditorService, PasswordItemComponent]

})


export class PasswordAdderComponent {
  form = new FormGroup({
    category: new FormControl(''),
    app: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private http: HttpClient, private toastr: ToastrService, private passwordService: PasswordEditorService, private comp: PasswordItemComponent) {
  }
  isFormInvalid(): boolean {
    return (!this.form.value.username || !this.form.value.password || !this.form.value.app || !this.form.value.category)
  }

  async onSubmit() {
    if (this.isFormInvalid()) {
      this.toastr.warning("Please fill all the fields")
      return
    }

    try {
      await this.passwordService.passwordAdder(this.form.value as UserData)
      this.toastr.success(`Password for ${this.form.value.username} was successfully added`)
      this.form.reset()
    } catch (error) {
      this.toastr.error(error as string)
    }
  }


  onDelete() { }
}
