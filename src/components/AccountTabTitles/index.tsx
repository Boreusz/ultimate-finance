import { Tfoot, Th, Thead, Tr } from "@chakra-ui/react";

const AccountTabTitles = ({ position }: { position: "top" | "bottom" }) => {
  const Content = (
    <Tr>
      <Th aria-label="Column-AccountName">Account Name</Th>
      <Th aria-label="Column-AccountType">Account Type</Th>
      <Th aria-label="Column-Balance">Balance</Th>
      <Th aria-label="Column-Actions">Actions</Th>
    </Tr>
  );
  return position === "top" ? (
    <Thead aria-label="AccountTable-Header">{Content}</Thead>
  ) : (
    <Tfoot aria-label="AccountTable-Footer">{Content}</Tfoot>
  );
};

export default AccountTabTitles;
