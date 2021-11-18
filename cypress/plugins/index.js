/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
const cucumber = require('cypress-cucumber-preprocessor').default
const sqlServer = require('cypress-sql-server');
const dbConfig = require('../../cypress.json')

const mysql = require('mysql2')
// the connection strings for different databases could
// come from a config file, or from environment variables
const connections = {
    localDB: {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: 'root1989',
        database: 'anghami'
    }
}

// querying the database from Node
function queryDB(connectionInfo, query) {
    const connection = mysql.createConnection(connectionInfo)

    connection.connect()

    return new Promise((resolve, reject) => {
        connection.query(query, (error, results) => {
            if (error) {
                return reject(error)
            }

            connection.end()

            return resolve(results)
        })
    })
}

module.exports = (on, config) => {
    on('file:preprocessor', cucumber())

    tasks = sqlServer.loadDBPlugin(dbConfig.db);
    on('task', tasks);

    on('task', {
        // destructure the argument into the individual fields
        queryDatabase({ dbName, query }) {
            const connectionInfo = connections[dbName]

            if (!connectionInfo) {
                throw new Error(`Do not have DB connection under name ${dbName}`)
            }

            return queryDB(connectionInfo, query)
        },
    });
}
