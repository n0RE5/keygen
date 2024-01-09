import { Column, DataType, Model, Table } from "sequelize-typescript";

interface KeyCreationAttrs {
    uuid: string;
    expiresIn: number;
    timestamp: number;
    userIp: string;
}

@Table({tableName: 'keys', createdAt: false, updatedAt: false})
export class Key extends Model<Key, KeyCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    uuid: string;

    @Column({type: DataType.BIGINT})
    timestamp: number;

    @Column({type: DataType.INTEGER})
    expiresIn: number;

    @Column({type: DataType.STRING})
    userIp: string;
}