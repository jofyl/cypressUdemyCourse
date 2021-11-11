describe('My 6th test suite', () => {
    it('tests mouse hover and their related popups', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('.mouse-hover').find('.mouse-hover-content').invoke('show');
        // targeting the div that contains the content and not the button

        // .click({force: true})
        cy.contains('Top').click();
        cy.url().should('include', 'top');

        // click the button wile still hidden
        cy.contains('Reload').click({force: true});
        cy.url().should('not.include', 'top');
    })
})