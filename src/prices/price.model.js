import { DataTypes } from "sequelize";
import sequelize from "../config/database/database.js";

const SpecialPrice = sequelize.define('special_price', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'special_price_id'
    },

    specialPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'special_price'
    },

    userId: {
        type: DataTypes.INTEGER,
        field: 'user_id',
        allowNull: true
    },

    productId: {
        type: DataTypes.INTEGER,
        field: 'product_id',
        allowNull: false,
        unique: true
    },

    status: {
        type:DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull:false
    }
})

export default SpecialPrice