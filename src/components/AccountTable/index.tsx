import { Table, TableContainer, Tbody } from "@chakra-ui/react";
import { Account } from "@/interfaces/Account";
import AccountTabTitles from "../AccountTabTitles";
import AccountTableRow from "../AccountTableRow";

const AccountTable = ({ accounts }: { accounts: Account[] }) => {
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="teal" aria-label="AccountTable">
        <AccountTabTitles position="top" />
        <Tbody>
          {accounts.map((account) => (
            <AccountTableRow key={account.id} account={account} />
          ))}
        </Tbody>
        <AccountTabTitles position="bottom" />
      </Table>
    </TableContainer>
  );
};

export default AccountTable;
