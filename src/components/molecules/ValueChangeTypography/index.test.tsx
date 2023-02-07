import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ValueChangeTypographyComponent from '.'

it('should renders the Value change typography', () => {
  render(<ValueChangeTypographyComponent   topText= '$ 230,966.85' topTextColor= "textColor.highEmphasis" bottomText= '+1.06%' bottomTextColor= "primary.success500"/>)
  const ReactElement = screen.getByTestId('valueChangeTypography')
  expect(ReactElement).toBeInTheDocument()
})

it('should renders the Value change typography without giving colors', () => {
  render(<ValueChangeTypographyComponent   topText= '$ 230,966.85' bottomText= '+1.06%'/>)
  const ReactElement = screen.getByTestId('valueChangeTypography')
  expect(ReactElement).toBeInTheDocument()
})