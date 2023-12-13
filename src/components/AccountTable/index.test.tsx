import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import AccountTable from ".";
import accounts from "@/tests/mocks/accounts";

test("GIVEN AccountTable WHEN there are accounts passed to display THEN Table gets populated with rows", () => {
  render(<AccountTable accounts={accounts.testAccounts} />);

  expect(screen.getByLabelText("AccountTable")).toBeInTheDocument();
  expect(screen.getByLabelText("AccountTable-Header")).toBeInTheDocument();
  expect(screen.getByLabelText("AccountTable-Footer")).toBeInTheDocument();
  expect(screen.getAllByLabelText(`AccountTableRow`)).toHaveLength(3);
});

test("GIVEN AccountTable WHEN there aren't accounts passed to display THEN Table gets populated with only header and footer rows", () => {
  render(<AccountTable accounts={[]} />);

  expect(screen.getByLabelText("AccountTable")).toBeInTheDocument();
  expect(screen.getByLabelText("AccountTable-Header")).toBeInTheDocument();
  expect(screen.getByLabelText("AccountTable-Footer")).toBeInTheDocument();
  expect(screen.queryByLabelText("AccountTableRow")).toBeNull();
});
