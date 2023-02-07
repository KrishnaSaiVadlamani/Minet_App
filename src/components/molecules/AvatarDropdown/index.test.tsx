import renderer from 'react-test-renderer';
import AvatarDropdown from '.';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import theme from '../../../theme';
import React from 'react';

it('renders avatar dropdown correctly', () => {
    const tree = renderer
      .create(<AvatarDropdown/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
});

describe('Molecules/AvatarDropdown', () => {
    test('Renders avatar dropdown correctly', () => {
        render(<AvatarDropdown />);
        expect(screen.getByTestId('avatar-dropdown')).toBeInTheDocument();
        expect(screen.getByTestId('avatar')).toBeInTheDocument();
        expect(screen.getByTestId('iconComponent')).toBeInTheDocument();
    })
})