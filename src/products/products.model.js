import { DataTypes } from "sequelize";
import sequelize from "../config/database/database.js";

const Product = sequelize.define('product', {
    id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        field: 'product_id'
    },

    productName: {
        type: DataTypes.STRING,
        allowNull:false,
        field: 'product_name'
    },

    brand: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    stock: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull:false
    },

    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },

    isSpecialPrice: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        field: 'is_special_price',
        allowNull: false
    },

    userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'user_id'
    }
})

export default Product