import 'jest'
import React from 'react'
import { render, screen } from '@testing-library/react'
import AvatarComponent from './index'


it('renders Avatar', () => {
    render(<AvatarComponent height='32px' width='32px'/>)
    
    const image = screen.getByTestId('avatar')
    expect(image).toBeDefined();
})