export interface Account {
  id: string;
  name: string;
  type: AccountType;
  balance: number;
}

export enum AccountType {
  CHECKING = "checking",
  SAVING = "saving",
  CREDIT_CARD = "credit card",
}
