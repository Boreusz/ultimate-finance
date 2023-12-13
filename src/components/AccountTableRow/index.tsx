import { Account } from "@/interfaces/Account";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { IconButton, Th, Tr } from "@chakra-ui/react";

const AccountTableRow = ({ account }: { account: Account }) => {
  return (
    <Tr aria-label={`AccountTableRow`}>
      <Th aria-label={`AccountTableRow-Name`}>{account.name}</Th>
      <Th aria-label={`AccountTableRow-Type`}>{account.type}</Th>
      <Th aria-label={`AccountTableRow-Balance`}>
        {account.balance.toFixed(2)}
      </Th>
      <Th aria-label={`AccountTableRow-Actions`}>
        <IconButton
          aria-label={`AccountTableRow-Button`}
          icon={<ArrowForwardIcon />}
        />
      </Th>
    </Tr>
  );
};

export default AccountTableRow;
