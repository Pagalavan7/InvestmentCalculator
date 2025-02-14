export interface InvestmentDetailsUserInput {
  initialInvestment: number;
  duration: number;
  expectedReturn: number;
  annualInvestment: number;
  userSubmittedData: number;
}

export interface InvestmentResults {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
}
