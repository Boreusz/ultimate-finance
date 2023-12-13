import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import AccountTableRow from ".";
import accounts from "@/tests/mocks/accounts";
import { Table, Tbody } from "@chakra-ui/react";

test("GIVEN AccountTableRow WHEN there is account passed to display THEN row gets populated and display correct data", () => {
  render(
    <Table>
      <Tbody>
        <AccountTableRow account={accounts.checkingTest} />
      </Tbody>
    </Table>
  );

  expect(screen.getByLabelText(`AccountTableRow`)).toBeInTheDocument();
  expect(screen.getByLabelText(`AccountTableRow-Name`)).toHaveTextContent(
    accounts.checkingTest.name
  );
  expect(screen.getByLabelText(`AccountTableRow-Type`)).toHaveTextContent(
    accounts.checkingTest.type
  );
  expect(screen.getByLabelText(`AccountTableRow-Balance`)).toHaveTextContent(
    accounts.checkingTest.balance.toString()
  );
  expect(screen.getByLabelText(`AccountTableRow-Actions`)).toBeInTheDocument();
  expect(screen.getByLabelText(`AccountTableRow-Button`)).toBeInTheDocument();
});
