import renderer from "react-test-renderer";
import HomeTemplate from ".";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../../organisms/Header";
import Footer from "../../molecules/Footer";
import SideNavComponentLocation from "../../organisms/SideNav";
import React from "react";
import DetailPage from "./index";
import TradePage from "../../pages/TradePage";

it("renders home template correctly", () => {
  render(
    <Router>
      <HomeTemplate
        children={<TradePage />}
        header={<Header pageName={"Trade"} />}
        footer={<Footer />}
        sideNav={<SideNavComponentLocation />}
      />
    </Router>
  );
});

describe("Templates/Home Template", () => {
  test("Renders home template correctly", () => {
    render(
      <Router>
        <HomeTemplate
          header={<Header pageName="TradePage" />}
          footer={<Footer />}
          children={
            <div style={{ height: "896px", width: "1296px" }}>content</div>
          }
          sideNav={<SideNavComponentLocation />}
        />
      </Router>
    );
    const template = screen.getByTestId("home-template");
    expect(template).toBeInTheDocument();
  });
});
