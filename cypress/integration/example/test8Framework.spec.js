import HomePage from "../../support/pageObjects/HomePage";
import ProductPage from "../../support/pageObjects/ProductPage";

describe('My 8th test suite', function() {

    // before(function() {
    //     cy.fixture('example').then(function(data) {
    //         this.data = data;
    //         cy.log(this.data);
    //     })
    // })

    // will need before each when having to deal with multiple tests
    beforeEach(function() {
        cy.fixture('example').then(function(data) {
            this.data = data;
            cy.log(this.data);
        })
    })

    it('My 8th test case', function() {
        cy.visit('https://rahulshettyacademy.com/angularpractice/');

        cy.get('form').find('input[name="name"]')
            .type(this.data.name)
            .should('have.attr', 'minlength', '2')
            .and('have.value', this.data.name);

        cy.get('#exampleFormControlSelect1').select(this.data.gender);

        cy.get('form-comp').find('h4').find('input').should('have.value', this.data.name);

        cy.get('#inlineRadio3').should('be.disabled');

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

    })

    it('My 8th test case using PageObject Model', function() {
        cy.visit('https://rahulshettyacademy.com/angularpractice/');

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

    })
})