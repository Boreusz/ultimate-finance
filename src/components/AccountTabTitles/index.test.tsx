import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import AccountTabTitles from ".";
import { Table } from "@chakra-ui/react";

test("GIVEN AccountTabTitles WHEN there are accounts to display THEN Table gets populated", () => {
  render(
    <Table>
      <AccountTabTitles position="top" />
    </Table>
  );

  expect(
    screen.queryByLabelText("AccountTable-Footer")
  ).not.toBeInTheDocument();
  expect(screen.queryByLabelText("AccountTable-Header")).toBeInTheDocument();
});

test("GIVEN AccountTabTitles WHEN there are accounts to display THEN Table gets populated", () => {
  render(
    <Table>
      <AccountTabTitles position="bottom" />
    </Table>
  );

  expect(screen.queryByLabelText("AccountTable-Footer")).toBeInTheDocument();
  expect(
    screen.queryByLabelText("AccountTable-Header")
  ).not.toBeInTheDocument();
});
