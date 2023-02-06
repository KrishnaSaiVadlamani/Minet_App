import renderer from 'react-test-renderer';
import ChipItem from '.';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import theme from '../../../theme';
import React from 'react';

it('renders rounded chip correctly', () => {
    const tree = renderer
      .create(<ChipItem chipvariant='light' label='24 h' chiptype='rounded'/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders squared chip correctly', () => {
    const tree = renderer
    .create(<ChipItem label='Bitcoin' chiptype='squared' chipcolor={theme.palette.chipColors.main}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
})

describe('Atoms/ChipItem', () => {
    test('Renders rounded light chip', () => {
        render(<ChipItem chipvariant='light' label='24 h' chiptype='rounded'/>)
        expect(screen.getByTestId('chip')).toBeInTheDocument();
    });

    test('Renders rounded dark chip', () => {
        render(<ChipItem chipvariant='dark' label='Purchased' chiptype='rounded'/>)
        expect(screen.getByTestId('chip')).toBeInTheDocument();
    })

    test('Renders square chip unselected', () => {
        render(<ChipItem chiptype='squared' selected={false} label={'Bitcoin'} chipcolor={theme.palette.chipColors.main}/>)
        expect(screen.getByTestId('chip')).toBeInTheDocument();
    })

    test('Renders square chip selected', () => {
        render(<ChipItem chiptype='squared' selected={true} label={'Bitcoin'} chipcolor={theme.palette.chipColors.main}/>)
        expect(screen.getByTestId('chip')).toBeInTheDocument();
    })
})