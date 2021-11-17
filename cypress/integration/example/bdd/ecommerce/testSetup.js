// the "data" variable will be available here
beforeEach(function () {
    cy.fixture('example').then(function(data) {
        this.data = data;
        cy.log(this.data);
        Cypress.config('defaultCommandTimeout', 100000);
    })
})