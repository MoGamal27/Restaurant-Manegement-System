const pgp = require('pg-promise')();

const client = require('../config/dbConfig');

const db = pgp(client)

const order = {
    create:(order)=>{
        dbMenu.one('INSERT INTO order(customer_id,items, totalAmount) VALUES($1,$2,$3) RETURNING*',
        [customer_id, ,items,totalAmount]
        )
    }
    

}

module.exports = {db, order}