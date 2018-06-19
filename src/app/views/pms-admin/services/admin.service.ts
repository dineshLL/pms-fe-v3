import { MeunConfiguratoinsAdminModel } from './../models/menu-configuration.admin.model';
import { SubMenuItemAdminModel } from './../models/sub-menu-item.admin.model';
import { ConstsService } from './../../../services/consts.service';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { MainMenuItemAdminModel } from '../models/main-menu-items.admin.model';

@Injectable()
export class AdminService {

    constructor(private http: HttpClient,
        private consts: ConstsService) { }

    /**
     * get all the main menu items
     */
    getAllMainMenuItems(): Observable<MainMenuItemAdminModel[]> {
        return this.http.get<MainMenuItemAdminModel[]>('https://api.myjson.com/bins/zxy3m');
    }

    getAllSubMenuItems(mainMenuId: number): Observable<SubMenuItemAdminModel[]> {
        return this.http.get<SubMenuItemAdminModel[]>('https://api.myjson.com/bins/177foi');
    }

    getAllMenuConfigurations(): Observable<MeunConfiguratoinsAdminModel[]> {
        return this.http.get<MeunConfiguratoinsAdminModel[]>('https://api.myjson.com/bins/1b0lya');
    }
}