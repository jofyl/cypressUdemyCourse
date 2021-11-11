describe('My 4rt test suite', () => {
    it('tests popup', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        //event: window:alert
        cy.on('window:alert', (str) => {
            // Will have to use mocha here instead of chai
            expect(str).to.be.eq('Hello , share this practice page and share your knowledge');
        })

        cy.get('#alertbtn').click();

        cy.on('window:confirm', (str) => {
            expect(str).to.be.eq('Hello , Are you sure you want to confirm?');

            // return true or false to represent "OK" or "Cancel"
            return false
        })

        cy.get('#confirmbtn').click();
    })

    it('tests child tabs and navigate', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#opentab').invoke('removeAttr', 'target').click();
        cy.url().should('include', 'cademy').and('not.include', 'Prac');
        cy.go('back');
    })
})