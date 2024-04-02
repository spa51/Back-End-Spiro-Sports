import { DataTypes, Model } from 'sequelize'
import db from '../db/connection';
import Category from './category'; 
import User from './user';


class Location extends Model{}

Location.init({
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
    category: {
        type: DataTypes.INTEGER
    },
    latitude: {
        type: DataTypes.DECIMAL
    },
    longitude: {
        type: DataTypes.DECIMAL
    },
    userId: {
        type: DataTypes.INTEGER
    },
    
 },{
    sequelize:db,
    modelName:'Location',
    createdAt: false,
    updatedAt: false
 });

 Location.belongsTo(Category,{foreignKey:'category', as:'categoryDetails'});

 export default Location;