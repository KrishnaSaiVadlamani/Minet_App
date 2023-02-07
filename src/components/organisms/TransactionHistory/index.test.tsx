import renderer from 'react-test-renderer';
import TransactionHistory from '.';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import React from 'react';
it('renders transaction history correctly', () => {
    const tree = renderer
      .create( <TransactionHistory transactions={[]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
});

describe('Organisms/TransactionHistory', () => {
    test('Renders transaction history correctly', () => {
        render( <TransactionHistory transactions={[]} />);
        expect(screen.getByTestId('transaction-history')).toBeInTheDocument();
    })
})