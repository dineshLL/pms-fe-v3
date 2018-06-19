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

  private DEV_HOST = 'http://192.168.102.133:8080/';

  public PROFILE_SERVICE_BASE = this.DEV_HOST + 'user-mgt-service/';
  public WNOP_SERVICE_BASE = this.DEV_HOST + 'wnop-rereg-mgt-service/';
  public CONFIG_SERVICE_BASE = this.DEV_HOST + 'app-config-api/';
}
