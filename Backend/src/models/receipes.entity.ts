import {
    Table,
    Column,
    Model,
    PrimaryKey,
    AutoIncrement,
    AllowNull,
    DataType,
    ForeignKey,
    BelongsTo
  } from 'sequelize-typescript';
  import { Users } from './users.entity';
  
  @Table({
    timestamps: false,
  })
  export class Receipes extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    receipeId: number;

    @AllowNull(false)
    @ForeignKey(() => Users)
    @Column({
        type: DataType.INTEGER,
    })
    makerId: number;

    @BelongsTo(() => Users, { foreignKey: 'makerId', targetKey: 'userId' })
    users: Users;

    @AllowNull(false)
    @Column({
        type: DataType.TEXT
    })
    ingredients: string;

    @AllowNull(false)
    @Column({
        type:DataType.TEXT("long")
    })
    makingProcess: string;

    @AllowNull(true)
    @Column({
        type: DataType.TEXT
    })
    imageUrl: string;

    @AllowNull(false)
    @Column({
      type: DataType.DATE,
    })
    createdAt: Date;

    @AllowNull(false)
    @Column({
      type: DataType.INTEGER,
    })
    createdBy: number;
  
    @AllowNull(true)
    @Column({
      type: DataType.DATE,
    })
    updatedAt: Date;

    @AllowNull(true)
    @Column({
      type: DataType.INTEGER,
    })
    updatedBy: number;
  }