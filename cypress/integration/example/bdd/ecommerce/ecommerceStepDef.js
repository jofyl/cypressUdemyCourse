import { Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../../support/pageObjects/HomePage";
import ProductPage from "../../../../support/pageObjects/ProductPage";

const homePage = new HomePage();
const productPage = new ProductPage();

Given('I open ecommerce page', function () {
    cy.visit(Cypress.env('url') + '/angularpractice/');
})

When('I add items to cart', function () {

    cy.get('.nav-item:nth-child(2)').click();

    // adding the above as a command in commands.js, we do
    cy.selectProduct('Black');

    // We can now parametrize - Iterate in JS forEach()
    this.data.productName.forEach(function(product) {
        cy.selectProduct(product);
    })

    productPage.getCheckoutButton().click();
})

And('Validate the total prices', function () {
    let sum = 0;

    // you can also use Number() instead of parseInt() or parseFloat()
    cy.get('tr td:nth-child(4) strong').each(function($el, index, $list) {
        var result = $el.text().split(' ')[1].trim();
        sum += parseInt(result);
        cy.log(sum);
    }).then( function() {
        cy.log(sum);
        cy.get('h3 > strong').then(function(element) {
            var total = parseInt(element.text().split(' ')[1].trim());
            expect(total).to.equal(sum);
        })
    })

    // in async mode, JS will execute the log below, and prints 0 because let sum = 0; is regular JS not Cypress
    cy.log(sum);
})

Then('Select the coutry submit and verify thank you message', function () {
    cy.contains('Checkout').click();

    cy.get('#country').type('India');
    cy.get('.suggestions > ul > li > a').click();
    cy.get('input#checkbox2').check({force: true});
    cy.get('.ng-untouched > .btn').click();

    // Multiple ways of checking
    cy.get('.alert').should('contain.text', 'Thank you');
    cy.get('.alert').should('include.text', 'Thank you');

    cy.get('.alert').then(function($element) {
        expect($element.text().includes('Thank you')).to.be.true;
        assert($element.text().includes('Thank you') === true, 'doing this using assert');
    })
})


When('I fill the form details', function () {
    homePage.getEditBox()
        .type(this.data.name)

    homePage.getGender()
        .select(this.data.gender);
})

Then('Validate the form behavrio', function (){
    homePage.getEditBox()
        .should('have.attr', 'minlength', '2')
        .and('have.value', this.data.name);

    homePage.getTwoWayDataBinding()
        .should('have.value', this.data.name);

    homePage.getEntrepreneurRadioButton()
        .should('be.disabled');
})

And('select the Shop page', function () {
    cy.get('.nav-item:nth-child(2)').click();
})