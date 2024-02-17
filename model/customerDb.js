const pgp = require('pg-promise')();

const client = require('../config/dbConfig')

const db = pgp(client)

const customer = {
    create:(customer)=>{
        db.one('INSERT INTO customer(name,email,password,address) VALUES($1,$2,$3,$4) RETURNING*',
        [customer.name, customer.email, customer.password, customer.address]
        )
    }

}

module.exports = {db, customer}