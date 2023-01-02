import { DataTypes } from "sequelize";


const TyresNew = (sequelize) => {
    const Schema = {
        price:  {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        marke: {
            type: DataTypes.STRING,
            allowNull: false
        },
        wheelcamera: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dimension: {
            type: DataTypes.STRING,
            allowNull: false
        },
        speedindex: {
            type: DataTypes.STRING,
            allowNull: false
        },
        speedindex2: {
            type: DataTypes.STRING,
            allowNull: false
        },
        constructiontype: {
            type: DataTypes.STRING,
            allowNull: false
        },
        loadindex: {
            type: DataTypes.STRING  ,
            allowNull: false
        },
        loadindex2: {
            type: DataTypes.STRING  ,
            allowNull: false
        },
        protector: {
            type: DataTypes.STRING,
            allowNull: false
        },
        purpose: {
            type: DataTypes.STRING,
            allowNull: false
        },
        devcode: {
            type: DataTypes.STRING,
            allowNull: false
        },
        width: {
            type: DataTypes.STRING,
            allowNull: false
        },
        diameter: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        eancode: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }
    return sequelize.define('tyresNew', Schema);
}

export default TyresNew