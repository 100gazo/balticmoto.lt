import { DataTypes } from "sequelize";


const Moto = (sequelize) => {
    const Schema = {
        price:  {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        marke: {
            type: DataTypes.STRING,
            allowNull: false
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        engine: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cooling: {
            type: DataTypes.STRING,
            allowNull: false
        },
        mileage: {
            type: DataTypes.STRING,
            allowNull: false
        },
        condition: {
            type: DataTypes.STRING  ,
            allowNull: false
        },
        fuelType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
    return sequelize.define('moto', Schema);
}

export default Moto