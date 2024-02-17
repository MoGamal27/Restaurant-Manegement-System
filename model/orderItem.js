const pgp = require('pg-promise')();

const client = require('../config/dbConfig');

const db = pgp(client)

const orderItem = {
    create:(orderItem)=>{
        dbMenu.one('INSERT INTO orderItem(menuItem_Id,quantity,menuItem) VALUES($1,$2,$3) RETURNING*',
        [menuItem_Id,quantity,menuItem ]
        )
    }
    

}

module.exports = {db, orderItem}