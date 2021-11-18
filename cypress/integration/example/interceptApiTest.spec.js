describe('my 1st API call intercept test', function () {
    it('intercepts an call and mocks the response', function () {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/');

        // Sepc the intercept before doing the action, not after
        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },{
            statusCode: 200,
            body: [{
                "book_name": "RestAssured with Java",
                "isbn": "RSU",
                "aisle": "2301"
            }]
        }).as('bookRetrievals');

        cy.get('.btn.btn-primary').click();
        cy.wait('@bookRetrievals');

        cy.get('p').then(($element) => {
            expect($element.text()).to.contain('Oops');
        })
    });


})