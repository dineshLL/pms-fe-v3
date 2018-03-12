export interface DeductionsTableModel {
    deductions: DeductionsInfoTableRowModel[];
}

interface DeductionsInfoTableRowModel {
    title: string;
    code: number;
    amount: number;
    amountFor2020: number;
}