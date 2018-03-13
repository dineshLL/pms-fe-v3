export interface ServiceBreakInfoTblModel {
    rows: Model[];
}

interface Model {
  from: string;
  to: string;
  reason: string;
  paymentStatus: string;
}