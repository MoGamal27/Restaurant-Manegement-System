const db = require('../../model/customerDb')
const {validateRegister,validateLogin} = require('../../utils/validators')
const {UserInputError} = require('apollo-server')
const bcrupt = require('bcrypt')
const generateToken = require('../../middleware/generateToken')
module.exports = {

    Mutation:{

        async register(_,{registerInput:{name, email, password}}) {
            
            const {valid,errors} = validateRegister(name,email,password)

             if(!valid){
             throw new UserInputError('Errors', {errors}); 
             }

             password = await bcrypt.hash(password,10);
              
            const newCustomer = await db.customer.create(name,email,password)
              
           const token = generateToken(db.customer.id) 

           return{
            newCustomer,
            token
           }
        },

        async login(_,{email,password}){
             
            const {errors,valid} = validateLogin(email,password)
            
             //check exist Customer 
           const existCustomer = await client.query('SELECT * FROM customer WHERE email = $1',[email])
           
           if(!existCustomer){
            errors.email = 'Email not found';
           }
           const user = existCustomer.rows[0]

           if (!valid){
            throw new UserInputError('Wrong credentials' , {errors});
           }

           const match = await bcrypt.compare(password, user.password);
           if (!match) {
               errors.password = 'Wrong password';
               throw new UserInputError('Wrong password', {errors});
           }

            const token = generateToken(db.customer.id)

            return{
                existCustomer,
                token
            }
        }
    }

   
}