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

        // get length or response array => it should match with number of rows in table + account for table header if there is any
        cy.wait('@bookRetrievals').should(function ({request, response}) {
            cy.get('tr').should('have.length', response.body.length + 1)
        });

        cy.get('p').then(($element) => {
            expect($element.text()).to.contain('Oops');
        })
    });

    it('modifies the request in flight', function () {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/');

        // Sepc the intercept before doing the action, not after
        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty', (req) => {
            req.url = 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra';
            req.continue((res) => {
                expect(res.statusCode).to.equal(403);
            });
        }).as('modedBookRetrievals');

        cy.get('.btn.btn-primary').click();
        cy.wait('@modedBookRetrievals');
    });

    it('calls an API', function () {
        cy.request({
            method: 'POST',
            url: 'http://216.10.245.166/Library/Addbook.php',
            failOnStatusCode: false,
            body: {
                "name": "Learn Appium Automation with Java",
                "isbn": "bcd",
                "aisle": "227",
                "author": "John foe"
            }
        }).then((response) => {
            expect(response.status).to.equal(404);
        })
    });
})