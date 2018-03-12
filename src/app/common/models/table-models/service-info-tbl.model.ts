export interface ServiceInfoTableModel {
    trainedPeriod:      Period;
    wnopDeductedPeriod: Period;
    permanantPeriod:    Period;
    pensionablePeriod:  Period;
}

interface Period {
    years:  number;
    months: number;
    days:   number;
}
