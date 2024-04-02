import  jwt  from 'jsonwebtoken';
import { NextFunction, Request, Response } from "express";

const validateToken = (req: Request, res:Response, next:NextFunction) => {
    const headerToken = req.headers['authorization']

    if (headerToken != undefined && headerToken.startsWith('Bearer ')) {

        try {
        //tiene token
        const bearerToken = headerToken.slice(7);

        jwt.verify(bearerToken,process.env.SECRET_KEY || 'tanto54321');
        next()
            
        } catch (error) {
            res.status(400).json({
                msg:'token no valido'
                
            })
        }

        
    } else {
        res.status(400).json({
            msg:'Acceso Denegado'
        })
        
    }
}

export default validateToken;