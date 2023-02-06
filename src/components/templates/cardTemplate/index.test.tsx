import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import CardTemplate from './index'

it('renders card template', () => {
  render(
    <CardTemplate
      LeftComponet={<p>LeftComponent</p>}
      RightComponet={<p>RightComponent</p>}
      cardHeight="80px"
      cardWidth="900px"
      cardPadding="5px"
    />
  )

  const element = screen.getByTestId('card-template')
  expect(element).toBeDefined()
})

it('renders card template with default padding', () => {
  render(
    <CardTemplate
      LeftComponet={<p>LeftComponent</p>}
      RightComponet={<p>RightComponent</p>}
      cardHeight="80px"
      cardWidth="900px"
    />
  )

  const element = screen.getByTestId('card-template')
  expect(element).toBeDefined()
})

