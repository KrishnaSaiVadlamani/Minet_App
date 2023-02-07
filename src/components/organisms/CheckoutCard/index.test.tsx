import renderer from 'react-test-renderer';
import CheckoutCard from '.';
import '@testing-library/jest-dom'
import React from 'react';
import {render,screen} from '@testing-library/react'

const handleChange = jest.fn()
it('renders buy checkout card correctly', () => {
    const tree = renderer
      .create(<CheckoutCard type='buy' btcValue={0.0234510} onClick={handleChange} symbol={''}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders sell checkout card correctly', () => {
    const tree = renderer
      .create(<CheckoutCard type='sell' btcValue={0.0234510} onClick={handleChange} symbol={''}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
});

describe('Organisms/CheckoutCard', () => {
  test('Renders sell card correctly', () => {
      render(<CheckoutCard type='sell' btcValue={0.0234510} onClick={handleChange} symbol={''}/>)
      //screen.getByRole('')
      expect(screen.getByRole('heading')).toHaveTextContent('0.023451');
      expect(screen.getAllByRole('img')).toHaveLength(8);
      expect(screen.getByRole('button')).toHaveTextContent('SELL NOW');
  })

  test('Renders buy card correctly', () => {
      render(<CheckoutCard type='buy' btcValue={0.0234510} onClick={handleChange} symbol={''}/>)
      //screen.getByRole('')
      expect(screen.getByRole('heading')).toHaveTextContent('0.023451');
      expect(screen.getAllByRole('img')).toHaveLength(8);
      expect(screen.getByRole('button')).toHaveTextContent('BUY NOW');
  })
})