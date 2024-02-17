const pgp = require('pg-promise')();

const client = require('../config/dbConfig');

const dbMenu = pgp(client)

const menu = {
    create:(menu)=>{
        dbMenu.one('INSERT INTO menu(restaurant_id,name) VALUES($1,$2) RETURNING*',
        [restaurant_id, ,menu.name]
        )
    }
    

}

module.exports = {dbMenu, menu}