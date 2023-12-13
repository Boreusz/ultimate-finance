import { Account, AccountType } from "@/interfaces/Account";

const checkingTest: Account = {
  id: "checking-id-001",
  name: "checking-test",
  type: AccountType.CHECKING,
  balance: 12.0,
};
const savingTest: Account = {
  id: "saving-id-001",
  name: "saving-test",
  type: AccountType.SAVING,
  balance: 12.01,
};
const creditTest: Account = {
  id: "credit-id-001",
  name: "credit-test",
  type: AccountType.CREDIT_CARD,
  balance: -12.5,
};
const testAccounts = [checkingTest, savingTest, creditTest];

export default { checkingTest, savingTest, creditTest, testAccounts };
