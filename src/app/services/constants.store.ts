import { Injectable } from '@angular/core';

@Injectable()
export class ConstantStore {

    private BASE_URL = "http://192.168.100.150/";

    /**
     * master data api
     */
    public MASTERDATA_API_BASE = this.BASE_URL + 'master/api/'

}
