import {Model, Table, Column, DataType} from "sequelize-typescript"

@Table({
    tableName: "monthlyData"
})
export default class MonthlyData extends Model {
    @Column({
        type: DataType.INTEGER,
        field: "id",
        allowNull: false,
        primaryKey: true
    })
    id?: number
    @Column({
        type: DataType.TEXT,
        field: "month",
        allowNull: true
    })
    month?: string
    @Column({
        type: DataType.REAL,
        field: "revenue",
        allowNull: true
    })
    revenue?: number
    @Column({
        type: DataType.REAL,
        field: "expenses",
        allowNull: true
    })
    expenses?: number
    @Column({
        type: DataType.REAL,
        field: "operationalExpenses",
        allowNull: true
    })
    operationalExpenses?: number
    @Column({
        type: DataType.REAL,
        field: "nonOperationalExpenses",
        allowNull: true
    })
    nonOperationalExpenses?: number
}