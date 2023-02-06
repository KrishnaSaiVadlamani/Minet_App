import renderer from 'react-test-renderer';
import HomeTemplate from '.';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom';
import Header from '../../organisms/Header';
import Footer from '../../molecules/Footer';
import SideNavCompnent from '../../organisms/SideNav';
import React from 'react';

it('renders home template correctly', () => {
    const tree = renderer
      .create(<BrowserRouter>
        <HomeTemplate
          header={<Header pageName="TradePage" />}
          footer={<Footer />}
          children={
            <div style={{ height: '896px', width: '1296px' }}>content</div>
          }
          sideNav={<SideNavCompnent />}
        />
        </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
});

describe('Templates/Home Template', () => {
    test('Renders home template correctly', () => {
        render(<BrowserRouter>
            <HomeTemplate
              header={<Header pageName="TradePage" />}
              footer={<Footer />}
              children={
                <div style={{ height: '896px', width: '1296px' }}>content</div>
              }
              sideNav={<SideNavCompnent />}
            />
            </BrowserRouter>)
        const template = screen.getByTestId('home-template')
        expect(template).toBeInTheDocument();
    })
})