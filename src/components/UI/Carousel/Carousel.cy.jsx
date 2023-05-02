import React from 'react';
import Carousel from './Carousel';

import productsAvailables from '../../../../cypress/fixtures/productsAvailables.json';

describe('<Carousel />', () => {
    it('renders', () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(<Carousel products={productsAvailables} />);
    });
});