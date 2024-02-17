
const db = require('../../model/restaurant')
const generateToken = require('../../middleware/generateToken')
module.exports = {

    Mutation:{
         
        async registerRest(_,{registerRestaurant:{name,description,cuisinetype,location,openingtime,closingtime,email,password}}) {
          
            try{

             password = await bcrypt.hash(password,10);
              
            const newRestaurant = await db.restaurant.create(
                name,
                description,
                cuisinetype,
                location,
                openingtime,
                closingtime,
                email,
                password)
              
              const token = generateToken(db.restaurant.id) 

           return{
            newRestaurant,
            token
           }
        }catch(e){
            throw new Error('failed to register')
        }
        },
    }
}