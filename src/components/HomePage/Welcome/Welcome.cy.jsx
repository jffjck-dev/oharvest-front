import React from 'react';
import Welcome from './Welcome';

describe('<Welcome />', () => {
    it('renders', () => {
    // see: https://on.cypress.io/mounting-react
        cy.mount(<Welcome />);
    });
});