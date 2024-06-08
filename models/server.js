/*
const express=require('express')

class Server{
    constructor(){
        this.app=express();
        this.port=process.env.PORT || 3000;
        //Middelware
        this.middlewares();
        //Rutas de la aplicacion
        this.routes();
    }

    routes(){
        this.app.get('/api',(req,res)=>{
              //res.json('Hello World');
              res.send('Hello World');
        })
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log('Servidor corriendo en el puerto',this.port)
        })
    }

    middlewares(){
        this.app.use(express.static('public'));
    }
}
module.exports = Server;
*/
const express=require('express')
const cors = require('cors');
class Server{
    constructor(){
        this.app=express();
        this.port=process.env.PORT;
        this.usuariosPath='/api/usuarios'
        //Middelware
        this.middlewares();
        //Rutas de la aplicacion
        this.routes();
    }

    routes(){
        this.app.use(this.usuariosPath,require('../routes/usuarios'))
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log('Servidor corriendo en el puerto',this.port)
        })
    }

    middlewares(){
        this.app.use(cors());
        //lectura y parseo del body recibe lo que se envia
        this.app.use(express.json());
;        this.app.use(express.static('public'));
    }
}
module.exports = Server;
