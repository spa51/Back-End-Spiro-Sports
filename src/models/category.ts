import { DataTypes } from 'sequelize'
import db from '../db/connection';

const Category = db.define('categorys',{
    name:{
        type:DataTypes.STRING
    },
    Descripcion:{
        type:DataTypes.STRING
    },
    iconUrl:{
        type:DataTypes.STRING
    },
},{
    createdAt: false,
    updatedAt: false
})

export default Category;