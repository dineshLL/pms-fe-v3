export interface TempTransfersTblModel {
    rows: Model[];
}
interface Model {
  institution: string;
  from: string;
  to: string;
  pensionRecovered: boolean;
  contribution: number;
}
