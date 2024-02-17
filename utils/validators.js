const client = require('../config/dbConfig')

module.exports.validateRegister = (name,email,password)=>{
       
    const errors = {};

    if(name.trim() === ''){
       errors.name = 'Name must not be empty';
    }

      //check exist Customer 
    const existCustomer =  client.query('SELECT * FROM customer WHERE email = $2',[email])
     if(existCustomer){
        errors.email = 'This email already exist'
     }
  
    if(email.trim() === ''){
        errors.email = 'Email must not be empty'
    } else{
        const regex = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;

        if(!email.match(regex)){
            errors.email = 'Email must be valid email'
        }
    }

    if(password.trim() ===''){
        errors.password = 'Password must not be empty';
    }
     
    return{
        errors,
        valid: Object.keys(errors).length < 1
    }

}

module.exports.validateLogin = (email,password)=>{
   
    const errors = {};

  
    if(email.trim() === ''){
        errors.email = 'Email must not be empty'
    } else{
        const regex = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;

        if(!email.match(regex)){
            errors.email = 'Email must be valid email'
        }
    }

    if(password.trim() ===''){
        errors.password = 'Password must not be empty';
    }
     
    return{
        errors,
        valid: Object.keys(errors).length < 1
    }
}

