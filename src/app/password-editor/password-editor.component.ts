import { Component } from '@angular/core';
import { PasswordEditorService, UserData } from '../password-editor.service';

@Component({
  selector: 'app-password-editor',
  templateUrl: './password-editor.component.html',
  styleUrls: ['./password-editor.component.css'],
  providers: [PasswordEditorService]
})
export class PasswordEditorComponent {
  userDataList: Array<UserData>

async constructor(private passwordService: PasswordEditorService) {
  this.userDataList = await passwordService.getUserData()
}
}
