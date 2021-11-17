describe('My 2nd test suite', function (){
    it('My 2nd test case', function (){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);

        cy.get('.products').as('productLocator');
        cy.get('@productLocator').find('.product').each((el, index, list) => {
            let vegtext = el.find('.product-name').text();
            if (vegtext.includes('Cash')) {
                cy.wrap(el).find('button').click();
            }
        })

        cy.get('.cart-icon > img').click();
        cy.get('button').contains('PROCEED TO CHECKOUT').click();
        cy.wait(2000);
        cy.get('button').contains('Place Order').click();
    })
})