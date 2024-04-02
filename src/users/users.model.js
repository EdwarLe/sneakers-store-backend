import { DataTypes } from "sequelize";
import sequelize from "../config/database/database.js";

const User = sequelize.define('user', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id'
    },

    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },

    surname: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },

    member:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },

    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
    }
})

export default User