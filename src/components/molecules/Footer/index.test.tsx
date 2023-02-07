import renderer from 'react-test-renderer';
import Footer from '.';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import React from 'react';

it('renders footer correctly', () => {
    const tree = renderer
      .create(<Footer/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
});

describe('Molecules/Footer', () => {
    test('Renders footer correctly', () => {
        render(<Footer />);
        //screen.getByRole('')
        expect(screen.getByTestId('footer')).toBeInTheDocument();
    })
})