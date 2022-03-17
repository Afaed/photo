import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe('About component', () => {
    //renders About Test
    //test 1
    it('renders', () => {
        render(<About />)
    })
    //test 2
    it('matches snapshot DOM node structure', () => {
        // render about
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
})