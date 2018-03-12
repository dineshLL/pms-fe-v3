export interface AllowanceTableModel {
    allowances: AllowanceInfoTableRowModel[];
}

interface AllowanceInfoTableRowModel {
    title: string;
    code: number;
    amount: number;
    amountFor2020: number;
}