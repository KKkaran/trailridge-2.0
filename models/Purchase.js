const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Purchase extends Model{
}
Purchase.init(
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        description:{
            type:DataTypes.STRING,
            allowNull:false
        },
        price:{
            type:DataTypes.DECIMAL,
            allowNull:false
        },
        shopper_id:{
            type:DataTypes.INTEGER,
            references:{
                model:'homies',
                key:'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'purchase'  
    }
)

module.exports = Purchase;