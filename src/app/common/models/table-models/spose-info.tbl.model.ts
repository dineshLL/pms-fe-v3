import { DependentsInfoTblModel } from './dependents-info.tbl.model';

export interface SpouseInfoTblModel {
    name: string;
    relation: string;
    gender: string;
    dob: Date;
    nic: string;
    disabled: boolean;
    birthCertNumber: number;
    marriageCertNumber: number;
}