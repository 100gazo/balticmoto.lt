import { DataTypes } from "sequelize";


const Users = (sequelize) => {
    const Schema = {
        
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userRole: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    }
    return sequelize.define('users', Schema);
}

export default Users