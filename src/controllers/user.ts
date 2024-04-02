import { Request,Response } from "express";
import bcrypt from "bcrypt";
import User from "../models/user";
import jwt from 'jsonwebtoken';

export const newUser = async (req: Request, res: Response) =>{
    const {username,password}=req.body;

    //Validar usuario base de datos
    const user = await User.findOne({where: {username: username}});

    if (user) {
       return res.status(400).json({
            msg: `Ya existe un usuario con el nombre ${username}`
        })
    }

    const hashedPassword = await bcrypt.hash(password,10);

    try {
        //guardar usuario
        await User.create({
            username:username,
            password: hashedPassword
        }) 
    
        res.json({
            msg: `Usuario ${username} creaado exitosamente`
        })
        
    } catch (error) {
        res.status(400).json({
            msg: 'Ocurrio un error',
            error
        })
        
    }


}

export const loginUser = async (req: Request, res: Response) =>{
    const {username,password}=req.body;

        //Validar usuario base de datos
    const user = await User.findOne({where: {username: username}});

    if (!user) {
        return res.status(400).json({
            msg: `No existe un usuario con el nombre ${username} en la base de datos`
        })
    }

    const passwordValid = await bcrypt.compare(password,(user as any).password)
    if(!passwordValid){
        return res.status(400).json({
            msg:`Password Incorrecto`
        })
    }

    const token = jwt.sign({
        username: username,
        role: (user as any).role
    },process.env.SECRET_KEY || 'tanto54321');

    res.json({
        token, 
        role: (user as any).role
    });

}

