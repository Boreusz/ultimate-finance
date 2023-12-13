import { Account } from "@/interfaces/Account";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { IconButton, Th, Tr } from "@chakra-ui/react";

const AccountTableRow = ({ account }: { account: Account }) => {
  return (
    <Tr aria-label={`AccountTableRow-${account.id}`}>
      <Th aria-label={`AccountTableRow-${account.id}-Name`}>{account.name}</Th>
      <Th aria-label={`AccountTableRow-${account.id}-Type`}>{account.type}</Th>
      <Th aria-label={`AccountTableRow-${account.id}-Balance`} isNumeric>
        {account.balance}
      </Th>
      <Th aria-label={`AccountTableRow-${account.id}-Actions`}>
        <IconButton
          aria-label={`AccountTableRow-${account.id}-Button`}
          icon={<ArrowForwardIcon />}
        />
      </Th>
    </Tr>
  );
};

export default AccountTableRow;
