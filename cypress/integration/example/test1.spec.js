describe('My first test suite', function (){
    it('My 1st test case', function (){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        cy.get('.product:visible').should('have.length', 4);

        // check the number of products without using "visible"
        // parent child chaining

        cy.get('.products').find('.product').should('have.length', 4);

        //eq(x) get the item at index x
        cy.get('.products').find('.product').eq(1);

        // while this can be reached using the cypress integrated tool from the browser, you should use the core concepts
        //of automation to make the code more stable
        // cy.get(':nth-child(3) > .product-action > button')
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();

        // #productLocator => aliasing
        cy.get('.products').as('productLocator');
        cy.get('@productLocator').find('.product').each((el, index, list) => {
            let vegtext = el.find('.product-name').text();
            if (vegtext.includes('Cash')) {
                cy.wrap(el).find('button').click();
            }
        })

        // Assigning found elements to variables => will have to handle the promise manually
        cy.get('.brand').then((logoelement) => {
            cy.log(logoelement.text());
        })

        cy.get('.brand').should('have.text', 'GREENKART');

        // cy.get('.brand').text(): this will not work, text() is not cypress method or command
        // this comes from JQuery: https://docs.cypress.io/api/table-of-contents
        // When dealing with methods that are not part of cypress, then the you will have to resolve
        // the promise manually using .then() since the commands do not resolve the promises by themselves



    })
})