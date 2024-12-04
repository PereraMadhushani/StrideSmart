import mysql from 'mysql'

const con =mysql.createConnection({    //create connection object
    host:"localhost",
    user:"root",
    password:"",
    database:"stridesmart"
})

con.connect(function(err){            //Establish a Connection
    if(err){
        console.log("connection error")
    }
    else{
        console.log("Connected")
    }
})
export default con;              // Export the Connection
