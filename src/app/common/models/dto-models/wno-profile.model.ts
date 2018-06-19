import { PersonalInfoModel } from "../form-models/personal-info.model";
import { ServiceInfoModel } from "../form-models/service-info.model";
import { DependentsInfoModel } from "../form-models/dependents-info.model";

export interface WnopProfileModel {
    refId?: number;
    personal: PersonalInfoModel;
    service: ServiceInfoModel;
    dependents?: DependentsInfoModel;
}