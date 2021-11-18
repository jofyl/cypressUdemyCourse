import HomePage from "../../support/page-objects/HomePage";
import ProductPage from "../../support/page-objects/ProductPage";

describe('My 9th test suite', function() {

    // Can be set here OR inside the before/after+Each() methods
    // Cypress.config('defaultCommandTimeout', 100000);

    before(function() {
        cy.fixture('example').then(function(data) {
            this.data = data;
            cy.log(this.data);
            Cypress.config('defaultCommandTimeout', 100000);
        })
    })

    it('My 9th test case using PageObject Model', function() {

        cy.visit(Cypress.env('url') + '/angularpractice/');

        const homePage = new HomePage();

        homePage.getEditBox()
            .type(this.data.name)
            .should('have.attr', 'minlength', '2')
            .and('have.value', this.data.name);

        homePage.getGender()
            .select(this.data.gender);

        homePage.getTwoWayDataBinding()
            .should('have.value', this.data.name);

        homePage.getEntrepreneurRadioButton()
            .should('be.disabled');

        // used to pause the test execution - for debugging
        // cy.pause();

        cy.get('.nav-item:nth-child(2)').click();

        // cy.get('h4.card-title').each(($el, index, $list) => {
        //     if ($el.text().includes('Black')) {
        //         // this is one way -> navigate to the element
        //         // cy.wrap($el).parent().next().find('button').click();
        //
        //         // this is another -> fetch the buttons again and use the index
        //         cy.get('.btn.btn-info').eq(index).click();
        //
        //         //another way would have been to fetch and iterate over the cards themselves, and check their children
        //     }
        // })

        // adding the above as a command in commands.js, we do
        cy.selectProduct('Black');

        // We can now parametrize - Iterate in JS forEach()
        this.data.productName.forEach((product) => {
            cy.selectProduct(product);
        })

        const productPage = new ProductPage();
        productPage.getCheckoutButton().click();

        let sum = 0;

        // you can also use Number() instead of parseInt() or parseFloat()
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
            var result = $el.text().split(' ')[1].trim();
            sum += parseInt(result);
            cy.log(sum);
        }).then( () => {
            cy.log(sum);
            cy.get('h3 > strong').then((element) => {
                var total = parseInt(element.text().split(' ')[1].trim());
                expect(total).to.equal(sum);
            })
        })

        // in async mode, JS will execute the log below, and prints 0 because let sum = 0; is regular JS not Cypress
        cy.log(sum);

        cy.contains('Checkout').click();

        cy.get('#country').type('India');
        cy.get('.suggestions > ul > li > a').click();
        cy.get('input#checkbox2').check({force: true});
        cy.get('.ng-untouched > .btn').click();

        // Multiple ways of checking
        cy.get('.alert').should('contain.text', 'Thank you');
        cy.get('.alert').should('include.text', 'Thank you');

        cy.get('.alert').then(($element) => {
            expect($element.text().includes('Thank you')).to.be.true;
            assert($element.text().includes('Thank you') === true, 'doing this using assert');
        })

    })
})