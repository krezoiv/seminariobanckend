require('./config/connection');
const cors =require( 'cors' );
const {connection} = require('./config/connection')
const express = require('express');
const port = (process.env.port || 3000);

const app = express();
app.use( cors() );

app.use(express.json());

//config
app.set('port', port);

//rutas
app.use('/api', require('./routes'))

//app.use( '/api/users', require('./routes/users/users.routes'));

app.listen(3000, ()=> {
    console.log('Servidor corriendo en puerto => ' + 3000);
})