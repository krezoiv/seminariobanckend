const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'mysql.cvzlccdnygep.us-east-1.rds.amazonaws.com',
    user: 'adminseminario',
    password: 'Proyecto2022',
    port: 3305,
    database: 'seminariotics'
});

connection.connect((err) => {
    if(err){
        console.log('hay un error ' , + err);
    }
    else{
        console.log('database on line');
    }
})


module.exports = {connection};