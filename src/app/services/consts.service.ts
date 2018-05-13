import { Injectable } from '@angular/core';

@Injectable()
export class ConstsService {

  private BASE_URL = 'http://localhost:8080/profile-mgt-service/';

  public PROFILE_SERVICE_BASE = this.BASE_URL + 'profiles/';
}
