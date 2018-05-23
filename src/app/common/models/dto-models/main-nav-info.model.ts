export interface MainNavInfoModel {
    configId: number;
    menuItemId: number;
    name:   string;
    url?:   string;
    icon?:  string;
    title?: boolean;
    variant?: boolean;
    badge?: boolean;
}