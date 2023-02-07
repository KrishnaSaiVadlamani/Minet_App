import TradeTable from ".";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

describe("Organisms/TradeTable", () => {
  test("Renders trade table correctly", () => {
    render(
      <Router>
        <TradeTable timePeriod="24h" filterValue="b" />
      </Router>
    );
    expect(screen.getByTestId("trade-table")).toBeInTheDocument();
    expect(screen.getAllByRole("columnheader")).toHaveLength(5);
  });
  test("Change descending order to ascending order", async () => {
    render(
      <Router>
        <TradeTable timePeriod="1h" filterValue="e" />
      </Router>
    );
    await waitFor(() => {
      const marketCapButton = screen.getByTestId("market-cap-button");
      fireEvent.click(marketCapButton);
    });
    render(
      <Router>
        <TradeTable timePeriod="1h" filterValue="b" />
      </Router>
    );
  });
  test("Select and unselect watch", async () => {
    await render(
      <Router>
        <TradeTable timePeriod="1m" filterValue="" />
      </Router>
    );

    setTimeout(async () => {
      await waitFor(() => {
        const watchListSelectedButton =
          screen.getAllByTestId("selected-watch")[0];
        fireEvent.click(watchListSelectedButton);
      });
    }, 2000);

    await render(
      <Router>
        <TradeTable timePeriod="1m" filterValue="" />
      </Router>
    );

    setTimeout(async () => {
      await waitFor(() => {
        const watchListSelectedButton =
          screen.getAllByTestId("unselected-watch")[0];
        fireEvent.click(watchListSelectedButton);
      });
    }, 2000);
  });
  test('Renders table rows correctly for all time periods', async () => {
    await render(<Router>
    <TradeTable timePeriod="1h" filterValue="" /></Router>)

    await render(<Router>
    <TradeTable timePeriod="24h" filterValue="" /></Router>)

    await render(<Router>
    <TradeTable timePeriod="1w" filterValue="" /></Router>)

    await render(<Router>
    <TradeTable timePeriod="1m" filterValue="" /></Router>)

    await render(<Router>
    <TradeTable timePeriod="1y" filterValue="" /></Router>)

    setTimeout(async () => {
      await waitFor(() => {
        expect(screen.getAllByTestId('table-row')).toHaveLength(9)
      })
    }, 2000)
  })
});
