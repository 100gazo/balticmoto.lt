import { DataTypes } from "sequelize";


const PartsUsed = (sequelize) => {
    const Schema = {
        price:  {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        condition: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
    return sequelize.define('partsUsed', Schema);
}

export default PartsUsed