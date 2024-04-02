import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import routesLocation from '../routes/location';
import routesCategory from '../routes/category';
import routesUser from '../routes/user'

import db from '../db/connection';
import User from './user';

class Server {
    private app: Application;
    private port: string;

    constructor() {
        console.log(process.env.PORT);
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.middleware();
        this.routes();
        this.dbConnect();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Aplicacion corriendo en el puerto ${this.port}`)
        })
    }

    routes() {
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                msg: 'API Trabajando'
            })
        })
        this.app.use('/api/locations', routesLocation)
        this.app.use('/api/categorys', routesCategory) 
        this.app.use('/api/users', routesUser)
    }

    middleware() {
        this.app.use(express.json());
        this.app.use(cors());
    }

    async dbConnect() {
        try {
            await db.authenticate()
            // await User.sync();
            console.log('Base de datos conectada')
        } catch (error) {
            console.log(error)
            console.log('Error al conectar')
        }
    }
}

export default Server;
