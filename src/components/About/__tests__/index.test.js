import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

// cleans up leftover memory from any prev tests, which may give false results
afterEach(cleanup);


describe('About component', () => {  

    // First Test, baseline test (npm run test)
    it('renders', () => {
        render(<About />);
    });

    // Second Test, snapshot test (then add this piece and run again, npm run test)
    it('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });

})
