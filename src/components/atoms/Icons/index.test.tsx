import React from "react"
import { render,screen } from "@testing-library/react"
import IconComponent from "./index"
import Analytics from './public/assets/icons/analytics.svg'
import '@testing-library/jest-dom'

it('render icon',()=>{
    render(<IconComponent src={Analytics} height="32px" width="32px"/>)
    const icon = screen.getByTestId("iconComponent")
    expect(icon).toBeDefined()
})