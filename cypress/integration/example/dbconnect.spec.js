import sqlServer from "cypress-sql-server";

context('Window', () => {
    specify('connect to DB', () => {
        // The Plugin does not work - classic way instead
        // let query = 'SELECT * FROM employees';
        // cy.sqlServer(query).then(function (result) {
        //     console.log(result);
        // })

        const dbName = 'localDB';
        const query = 'SELECT * FROM employees';

        cy.task('queryDatabase', { dbName, query }).then(function (results) {
            console.log(results);
        })
    })
})