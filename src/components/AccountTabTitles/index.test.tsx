import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import AccountTabTitles from ".";
import { Table } from "@chakra-ui/react";

test("GIVEN AccountTabTitles WHEN position is set top 'top' THEN Table Header is displayed", () => {
  render(
    <Table>
      <AccountTabTitles position="top" />
    </Table>
  );

  expect(
    screen.queryByLabelText("AccountTable-Footer")
  ).not.toBeInTheDocument();
  expect(screen.queryByLabelText("AccountTable-Header")).toBeInTheDocument();

  expect(screen.queryByLabelText("Column-AccountName")).toHaveTextContent(
    "Account Name"
  );
  expect(screen.queryByLabelText("Column-AccountType")).toHaveTextContent(
    "Account Type"
  );
  expect(screen.queryByLabelText("Column-Balance")).toHaveTextContent(
    "Balance"
  );
  expect(screen.queryByLabelText("Column-Actions")).toHaveTextContent(
    "Actions"
  );
});

test("GIVEN AccountTabTitles WHEN position is set top 'bottom' THEN Table Footer is displayed", () => {
  render(
    <Table>
      <AccountTabTitles position="bottom" />
    </Table>
  );

  expect(screen.queryByLabelText("AccountTable-Footer")).toBeInTheDocument();
  expect(
    screen.queryByLabelText("AccountTable-Header")
  ).not.toBeInTheDocument();

  expect(screen.queryByLabelText("Column-AccountName")).toHaveTextContent(
    "Account Name"
  );
  expect(screen.queryByLabelText("Column-AccountType")).toHaveTextContent(
    "Account Type"
  );
  expect(screen.queryByLabelText("Column-Balance")).toHaveTextContent(
    "Balance"
  );
  expect(screen.queryByLabelText("Column-Actions")).toHaveTextContent(
    "Actions"
  );
});
