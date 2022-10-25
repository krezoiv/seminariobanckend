const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'mysqlserver.cvzlccdnygep.us-east-1.rds.amazonaws.com',
    user: 'seminario',
    password: 'Proyecto2022',
    port: 3306,
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