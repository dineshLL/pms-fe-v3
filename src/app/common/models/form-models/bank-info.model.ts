export interface BankInfoModel {
    pension:  SubModel;
    gratuity: SubModel;
}

interface SubModel {
    bank:          string;
    branch:        string;
    accountNumber: string;
}
