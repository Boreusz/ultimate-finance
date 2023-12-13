import AccountTable from "@/components/AccountTable";
import accounts from "@/tests/mocks/accounts";

const Accounts = () => {
  return <AccountTable accounts={accounts.testAccounts} />;
};

export default Accounts;
