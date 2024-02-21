import { Injectable } from '@angular/core';
import { UserModel } from './user.model';

// 1. Registrar sevicio en user.module
// 2. login 
// 3. Propiedad current user -> UserModel {....}
// 3. logout -> null

@Injectable()
export class AuthService {
  currentUser!: UserModel | null;
  redirectUrl!: string;

  constructor() {}

  isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  login(userName: string, password: string): void {
    // TODO: Implement backend service
    this.currentUser = {
      id: 34,
      isAdmin: false,
      userName: userName,
    };
  }

  logout(): void {
    this.currentUser = null;
  }
}
