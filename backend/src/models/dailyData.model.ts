import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
    tableName: "dailyData"
})
export default class DailyData extends Model {
    @Column({
        type: DataType.INTEGER,
        field: "id",
        primaryKey: true
    })
    id?: number
    @Column({
        type: DataType.DATE,
        field: "date"
    })
    date?: Date
    @Column({
        type: DataType.REAL,
        field: "revenue"
    })
    revenue?: number
    @Column({
        type: DataType.REAL,
        field: "expenses"
    })
    expenses?: number
}