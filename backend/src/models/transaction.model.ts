import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
    tableName: "transactions"
})
export default class Transaction extends Model {
    @Column({
        type: DataType.INTEGER,
        field: "id",
        primaryKey: true
    })
    id?: number
    @Column({
        type: DataType.TEXT,
        field: "_id",
        allowNull: false
    })
    _id?: string
    @Column({
        type: DataType.TEXT,
        field: "buyer"
    })
    buyer?: string
    @Column({
        type: DataType.REAL,
        field: "amount"
    })
    amount?: number
    @Column({
        type: DataType.ARRAY(DataType.TEXT),
        field: "productIds"
    })
    productIds?: string[]

}