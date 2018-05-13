import { DependentsInfoTblModel } from './../table-models/dependents-info.tbl.model';
import { SpouseInfoTblModel } from './../table-models/spose-info.tbl.model';

export interface DependentsFormodel {
    spouses: SpouseInfoTblModel[];
    otherDependents: DependentsInfoTblModel[];
    maritalStatus: string;
    wnopRefundStatus: string;
}