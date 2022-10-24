const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3302,
    database: 'SeminarioTICs'
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