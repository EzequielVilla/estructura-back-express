import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { v4 as uuid } from "uuid";
import { sequelize } from "../db/config";
import { BaseInterface } from "./base";

export interface BasicUserInterface {
  name: string;
  lastName: string;
  birthDate: Date;
  age: number;
  token?: string;
  AuthId?: String;
}
export interface UserCreationInterface
  extends BaseInterface,
    BasicUserInterface {}

export class User extends Model<
  InferAttributes<User>,
  InferCreationAttributes<User>
> {
  public id!: string;
  public name!: string;
  public lastName!: string;
  public birthDate!: Date;
  public age!: number;
  public token?: string;
  public AuthId?: String;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: uuid(),
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    lastName: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    birthDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    token: {
      type: DataTypes.STRING(1000),
      allowNull: true,
    },
    AuthId: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },

  { sequelize, modelName: "user" }
);
