import 'cypress-iframe'

describe('My 7th test suite', () => {
    it('tests child tabs method 2', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#opentab').then(($el) => {
            var url = $el.prop('href');
            cy.log(url);
            cy.visit(url);

            // the below will fail, assume url = https://google.com because of cross origin
            // url = 'https://google.com'
            // cy.visit(url);
            // so the best thing to do here, would be to alter the button, remove target="_blank" and alter thr value of its href using JQuery
            // this should allow the click to navigate to another website
            // PS: you need to turn off web security from cypress.json
            // "chromeWebSecurity": false
            // the below works with "chromeWebSecurity": false
            // cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
            // cy.get('#opentab')
            //     .invoke('removeAttr', 'target')
            //     .invoke('attr', 'href', 'https://google.com')
            //     .click();

            // the below will Fail => cy.visit() does not allow cross origin, even if security is disabled
            // cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
            // cy.wait(2000);
            // cy.visit('https://google.com');

         })
    })

    it('test frames', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        //load the iframe
        cy.frameLoaded('#courses-iframe');

        //access it
        cy.iframe().find('a[href="#/mentorship"]').eq(0).click();
        // cy.iframe().find('.pricing-title');
        cy.iframe().find('h1[class*="pricing-title"]').should('have.length', 2);
    });
})