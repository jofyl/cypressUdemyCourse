describe('My 3rd test suite', () => {
    it('test checkboxes and dropdowns', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('input#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
        cy.get('input#checkBoxOption1').uncheck().should('not.be.checked');

        // selecting multiple checkbox => needs a locator for all checkboxes, then use a filter with check()
        cy.get('input[type="checkbox"]').check(['option2', 'option3']);

        // Dropdowns, static list of options vs dynamic
        cy.get('#dropdown-class-example').select('Option2').should('have.value', 'option2');
        // another example:
        // cy.get('select[name="dropdown-class-example"]').select('Option2')

        // Using CSS, to travel from parent to child this can be done by adding a whitespace
        cy.get('#autocomplete').type('ind')
            .get('.ui-menu-item div')
            .each(($el, index, $list) => {
                if ($el.text() == 'India') {
                    cy.wrap($el).click();
                }
            })

        cy.get('#autocomplete').should('have.value', 'India');
    })

    it('tests hidden and visible elements, it also test radio buttons', () => {
        cy.get('input[id="displayed-text"]').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('input[id="displayed-text"]').should('not.be.visible');
        cy.get('#show-textbox').click();
        cy.get('input[id="displayed-text"]').should('be.visible');

        // Testing Radio button - example on skipping the tag name
        // cy.get('.radioButton').find('input[value="radio2"]').check();
        cy.get('fieldset').find('label[for="radio2"]').find('input[value="radio2"]').click();
        // another way would be
        cy.get('[value=radio1]').click();

    })
})