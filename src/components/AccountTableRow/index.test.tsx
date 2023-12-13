import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import AccountTableRow from ".";
import accounts from "@/tests/mocks/accounts";
import { Table, Tbody } from "@chakra-ui/react";

test("GIVEN AccountTable WHEN there are accounts to display THEN Table gets populated", () => {
  render(
    <Table>
      <Tbody>
        <AccountTableRow account={accounts.checkingTest} />
      </Tbody>
    </Table>
  );

  expect(
    screen.getByLabelText(`AccountTableRow-${accounts.checkingTest.id}`)
  ).toBeInTheDocument();
  expect(
    screen.getByLabelText(`AccountTableRow-${accounts.checkingTest.id}-Name`)
  ).toBeInTheDocument();
  expect(
    screen.getByLabelText(`AccountTableRow-${accounts.checkingTest.id}-Type`)
  ).toBeInTheDocument();
  expect(
    screen.getByLabelText(`AccountTableRow-${accounts.checkingTest.id}-Balance`)
  ).toBeInTheDocument();
  expect(
    screen.getByLabelText(`AccountTableRow-${accounts.checkingTest.id}-Actions`)
  ).toBeInTheDocument();
  expect(
    screen.getByLabelText(`AccountTableRow-${accounts.checkingTest.id}-Button`)
  ).toBeInTheDocument();
});
