import {Model, Table, Column, DataType} from "sequelize-typescript";

@Table({
    tableName: "products"
})
export default class Product extends Model {
    @Column({
        type: DataType.INTEGER,
        field: "id",
        allowNull: true,
        autoIncrement: true,
        primaryKey: true
    })
    id?: number;
    @Column({
        type: DataType.TEXT,
        allowNull: true,
        field: "_id",
    })
    _id?: string;

    @Column({
        type: DataType.REAL,
        allowNull: true,
        field: "price",
    })
    price?: number;
    @Column({
        type: DataType.REAL,
        allowNull: true,
        field: "expense",
    })
    expense?: number;
    @Column({
        type: DataType.ARRAY(DataType.TEXT),
        allowNull: true,
        field: "transactions",
    })
    transactions?: string[];
}