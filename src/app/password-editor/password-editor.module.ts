import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordEditorComponent } from './password-editor.component';
import { PasswordAdderComponent } from './components/password-adder/password-adder.component';
import { PasswordItemComponent } from './components/password-item/password-item.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PasswordEditorComponent,
    PasswordAdderComponent,
    PasswordItemComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule

  ],
  exports: [
    PasswordEditorComponent
  ]

})
export class PasswordEditorModule { }
