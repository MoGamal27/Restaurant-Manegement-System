const pgp = require('pg-promise')();

const client = require('../config/dbConfig')

const db = pgp(client)

const restaurant = {
    create:(restaurant)=>{
        db.one('INSERT INTO restaurant(name,description,cuisinetype,location,openingtime,closingtime,email,password) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING*',
        [restaurant.name, restaurant.description, restaurant.cuisinetype, restaurant.location, restaurant.openingtime, restaurant.closingtime, restaurant.email, restaurant.password]
        )
    }

}

module.exports = {db, restaurant}