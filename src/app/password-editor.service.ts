import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { firstValueFrom } from 'rxjs';
import { encrypt, decrypt } from 'src/utils/crypto-utils';

@Injectable({
  providedIn: 'root'
})
export class PasswordEditorService {

  constructor(private http: HttpClient, private toastr: ToastrService) {
  }
  randomUser: any;


  async passwordAdder(userData: UserData) {
    try {
      await firstValueFrom(this.http.post('http://localhost:3000/users', { ...userData, password: encrypt(userData.password) }))
    } catch (error) {
      console.error(error)
      throw new Error("Could not save password")
    }
  }
  async getUserData(userData: UserData): Promise<Array<UserData>> {
    try {
      return await firstValueFrom(this.http.get<Array<UserData>>('http://localhost:3000/users'))
    } catch (error) {
      console.error(error)
      throw new Error("Could not get user data")
    }
  }
}
export interface UserData {
  category: string,
  app: string,
  username: string,
  password: string
}
