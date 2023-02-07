import renderer from "react-test-renderer";
import TradePage from ".";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router, HashRouter } from "react-router-dom";
import React from "react";

it("renders trade page correctly", () => {
   render(
    <Router>
      <TradePage/>
    </Router>
   )
});

test("Select and unselect watch", async () => {
  render(
    <Router>
      <TradePage />
    </Router>
  );

  waitFor(async () => {
    await waitFor(() => {
      const watchListSelectedButton =
        screen.getAllByTestId("unselected-watch")[0];
      fireEvent.click(watchListSelectedButton);
    });
  });
});
