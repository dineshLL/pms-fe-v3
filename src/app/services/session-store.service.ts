import { AuthResponse } from './../common/models/dto-models/auth-response.model';
import { Injectable } from '@angular/core';

@Injectable()
export class SessionStoreService {

  private authInformation: AuthResponse = null;

  constructor() {}

  setAuthInformation(model: AuthResponse) {
    this.authInformation = model;
  }

  get isLoggedIn(): boolean {
    if(this.authInformation != null) {
      return true;
    
    } else {
      return false;
    }
  }

  get token() {
    return this.authInformation.token;
  }

}
