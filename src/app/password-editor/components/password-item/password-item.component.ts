import { Component, Input } from '@angular/core';
import { decrypt } from 'src/utils/crypto-utils';

@Component({
  selector: 'app-password-item',
  templateUrl: './password-item.component.html',
  styleUrls: ['./password-item.component.css']
})
export class PasswordItemComponent {
  @Input() user: {
    category: string,
    app: string,
    username: string,
    password: string
  };

  decryptedPwd = ""


  isEditMode: boolean = false;



  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
    if (this.isEditMode) {
      this.decryptedPwd = decrypt(this.user.password)
    }
  }

  savePassword() {
    // Perform any necessary operations to save the updated password
    // For example, make an API call to update the password in the backend

    // After saving the password, exit the edit mode
    this.toggleEditMode();
  }

  cancelEdit() {
    // Revert any changes made to the password field and exit the edit mode
    this.toggleEditMode();
  }
}
