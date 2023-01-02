import { DataTypes } from 'sequelize'

const Trips = (sequelize) => {
    const Schema = {
        name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        media: {
            type: DataTypes.STRING,
            allowNull: true
        },
        text: {
            type: DataTypes.STRING,
            allowNull: true
        },

    }
    
    return sequelize.define('trips', Schema);

}
export default Trips