const pgp = require('pg-promise')();

const client = require('../config/dbConfig');

const dbMenuItem = pgp(client)

const menuItem = {
    create:(menuItem)=>{
        dbMenuItem.one('INSERT INTO menuItem(menu_id,name,price,stock) VALUES($1,$2,$3,$4) RETURNING*',
        [menu_id, ,menuItem.name, menuItem.price, menuItem.stock]
        )
    }

}

module.exports = {dbMenuItem, menuItem}