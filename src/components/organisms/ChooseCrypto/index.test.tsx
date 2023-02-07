import { render, screen } from "@testing-library/react"
import React from "react"
import ChooseCurrency from '.'
import '@testing-library/jest-dom'
import { currencies } from "../../../utils/constants"

describe('choose crypto tests',()=>{
    test('whether the  cards are rendering',()=>{
        render(
            <ChooseCurrency currenciesData={currencies}/>
        )
        const chooseCrypto = screen.getByTestId('chooseCurrency')
    expect(chooseCrypto).toBeInTheDocument
    })
})