class HomePage {

    getEditBox() {
        return cy.get('form').find('input[name="name"]');
    }

    getTwoWayDataBinding() {
        return cy.get('form-comp').find('h4').find('input');
    }

    getGender() {
        return cy.get('#exampleFormControlSelect1');
    }

    getEntrepreneurRadioButton() {
        return cy.get('#inlineRadio3');
    }
}

export default HomePage;