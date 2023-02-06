import { render,screen } from "@testing-library/react"
import React from "react"
import ImageComponent from './index'
import Bitcoin from './public/assets/coins/bitcoin.svg'
import '@testing-library/jest-dom'

it('render image',()=>{
    render(<ImageComponent src={Bitcoin} height="32px" width="32px"/>)
    const image = screen.getByTestId("image")
    expect(image).toBeDefined()
})