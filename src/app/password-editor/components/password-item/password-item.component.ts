import { Component, Input, OnInit, } from '@angular/core';
import { decrypt } from 'src/utils/crypto-utils';
import { PasswordAdderComponent } from '../password-adder/password-adder.component';
import { PasswordEditorService, UserData } from 'src/app/password-editor.service';
@Component({
  selector: 'app-password-item',
  templateUrl: './password-item.component.html',
  styleUrls: ['./password-item.component.css']
})
export class PasswordItemComponent implements OnInit {
  @Input() user: {
    category: string,
    app: string,
    username: string,
    password: string
  };
  constructor(private PasswordEditorService: PasswordEditorService) {
  }

  randomUser: any;
  userCollection: any[] = [];
  fetchedUser: any[] = []
  decryptedPwd = ""
  randomUserData: any[] = []
  isEditMode: boolean = false;


  async ngOnInit() {
    try {
      this.userCollection = await this.PasswordEditorService.getUserData(this.user as UserData);
      this.getRandomUser();
    } catch (error) {
      console.error(error);
    }
  }

  getRandomUser(): void {
    if (this.userCollection.length > 0) {
      const randomIndex = Math.floor(Math.random() * this.userCollection.length);
      this.randomUser = this.userCollection[randomIndex];
      console.log(this.randomUser)
    }
  }


  Edit() {
    if (this.randomUser) {
      this.randomUserData = this.randomUser
      console.log(this.randomUserData)
    }
  }


  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
    if (this.isEditMode) {
      this.decryptedPwd = decrypt(this.user.password)
      this.decryptedPwd = this.user.password
    }
  }

  async SavePassword() {
    await this.PasswordEditorService.passwordAdder(this.user)
    this.toggleEditMode();
  }
}
