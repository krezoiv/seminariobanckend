
const { Router } = require('express');
const router = Router();
const connection= require('./config/connection')


router.get('/', (req, res) => {
    let sql = 'SELECT * FROM integrantes'
    connection.connection.query(sql, (err, rows, fields) => {
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

router.get('/:id', (req, res) => {
    const {id} = req.params;
    let sql = 'SELECT * FROM integrantes WHERE id= ?'
    connection.connection.query(sql, [id],(err, rows, fields) => {
        if(err) throw err;
        else{
            res.json
                (rows[0])
            
        }
    })
})






router.post('/', (req, res) => {
    const {carnet, nombres, apellidos, telefono, email} = req.body;

    let sql = `INSERT INTO integrantes (carnet, nombres, apellidos, telefono, email) VALUES ('${carnet}' , '${nombres}' , '${apellidos}' , '${telefono}' ,'${email}' )`
    
    connection.connection.query(sql, (err, rows, fields) => {
        if(err) throw err;
    else{
        res.json(rows)
    }
    })
})


router.delete('/:id', (req, res) => {
    const {id} = req.params
    let sql = `DELETE FROM integrantes WHERE id='${id}'`
    connection.connection.query(sql, (err, rows, fields) => {
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const {carnet, nombres, apellidos, telefono, email} = req.body;
    let sql = `UPDATE integrantes SET carnet = '${carnet}', nombres = '${nombres}', apellidos = '${apellidos}',  telefono = '${telefono}', email = '${email}' WHERE id='${id}'`
    connection.connection.query(sql, (err, rows, fields) => {
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

module.exports = router;