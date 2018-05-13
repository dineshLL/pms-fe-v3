import { Injectable } from '@angular/core';

@Injectable()
export class ConstsService {

  /**
   * production
   */
  // private BASE_URL = 'http://localhost:8080/profile-mgt-service/';

  // public PROFILE_SERVICE_BASE = this.BASE_URL + 'profiles/';
  // public WNOP_PROFILE_SERVICE_BASE = this.BASE_URL + 'wnop/profiles/';

  /**
   * development
   */

  //private BASE_URL = 'http://localhost:8080/profile-mgt-service/';

  public PROFILE_SERVICE_BASE = 'http://localhost:8080/profile-mgt-service/profiles/';
  public WNOP_SERVICE_BASE = 'http://localhost:8080/wnop-rereg-mgt-service/';
}
