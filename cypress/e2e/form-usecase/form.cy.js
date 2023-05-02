describe('sign in for a school trip', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173');
    });

    it('land on the reservation page, select a date, select a timeslot, get to the form page and send it', () => {
        cy.wait(1000);

        cy.get('.navbar');

        cy.get('.navbar__list');

        cy.get('.navbar__list-item:last-child').should('have.text', 'Visite scolaire').click();

        cy.wait(1000);

        cy.get('.react-datepicker__day.react-datepicker__day--010').should('have.class', 'react-datepicker__day--disabled');

        cy.get('.react-datepicker__day.react-datepicker__day--011').click();

        cy.get('select.calendar__select').get('[value="morning"]').should('be.disabled');

        cy.get('select.calendar__select').select('afternoon');

        cy.get('button.calendar__button').click();

        const newName = 'toto';

        cy.get('#name').type(`${newName}`);

        cy.get('#name').should('have.value', 'toto');

        const newAddress = '42 rue de lecole';

        cy.get('#address').type(`${newAddress}`);

        cy.get('#address').should('have.value', '42 rue de lecole');

        const newZipcode = 57000;

        cy.get('#zipcode').type(`${newZipcode}`);

        cy.get('#zipcode').should('have.value', '57000');

        const newCity = 'Strasbourg';

        cy.get('#city').type(`${newCity}`);

        cy.get('#city').should('have.value', 'Strasbourg');

        const newPhone = '0688001300';

        cy.get('#phone').type(`${newPhone}`);

        cy.get('#phone').should('have.value', '0688001300');

        const newMail = 'toto@mail.com';

        cy.get('#mail').type(`${newMail}`);

        cy.get('#mail').should('have.value', 'toto@mail.com');

        const newContact = 'toto';

        cy.get('#contact').type(`${newContact}`);

        cy.get('#contact').should('have.value', 'toto');

        const newStudentNumber = 20;

        cy.get('#studentNumber').type(`${newStudentNumber}`);

        cy.get('#studentNumber').should('have.value', '20');

        const newGuideNumber = 1;

        cy.get('#guideNumber').type(`${newGuideNumber}`);

        cy.get('#guideNumber').should('have.value', '1');

        const newGroupNumber = 1;

        cy.get('#groupNumber').type(`${newGroupNumber}`);

        cy.get('#groupNumber').should('have.value', '1');

        const newTransport = 'roulette';

        cy.get('#transport').type(`${newTransport}`);

        cy.get('#transport').should('have.value', 'roulette');

        cy.get('button.formpage__btn').click();

        cy.wait(5000);
    });
});
