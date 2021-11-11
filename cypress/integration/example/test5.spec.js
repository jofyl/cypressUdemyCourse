describe('My 5th test suite', () => {
    it('tests tables', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('table[id="product"]').find('tr td:nth-child(2)').each(($el, index, $list) => {
            var text = $el.text();
            if (text.includes('Python')) {
                // Just experimenting and printing the contents of $list
                for (var i = 0; i < $list.length; i++){
                    cy.log($list[i].textContent)
                }

                //find the sibling .next() or .prev() - We can not apply .text() to a cypress object => we need to resolve the promise
                cy.get('table[id="product"]').find('tr td:nth-child(2)')
                    .eq(index).next()
                    .then((price) => {
                        var priceText = price.text();
                        expect(priceText).to.eq('25');
                        chai.expect(priceText).to.eq('25');
                    })
            }
        })

    })
})