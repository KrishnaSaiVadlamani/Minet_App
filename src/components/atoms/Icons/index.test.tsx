import React from "react"
import { render,screen } from "@testing-library/react"
import IconComponent from "./index"
import Analytics from '../../../../public/assets/icons/analytics.svg'
import '@testing-library/jest-dom'

it('render icon',()=>{
    render(<IconComponent src={Analytics} height="32px" width="32px" padding="5px"/>)
    const icon = screen.getByTestId("iconComponent")
    expect(icon).toBeDefined()
})
describe("IconComponent", () => {
    it("should display the icon with the specified width and height", () => {
      render(
        <IconComponent
          src={Analytics}
          width="50px"
          height="50px"
          padding="10px"
        />
      );
  
      const icon = screen.getByTestId("iconComponent");
      icon.setAttribute("src", JSON.stringify({"process": process}));
      expect(icon).toHaveAttribute("width", "50px");
      expect(icon).toHaveAttribute("height", "50px");
      icon.setAttribute("padding", "10px");
    });
  });