import { v4 as uuid } from "uuid";
import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  ForeignKey,
} from "sequelize";
import { sequelize } from "../db/config";
import { BaseInterface } from "./base";

export interface BasicAuthInterface {
  email: string;
  password: string;
}

export interface AuthInterface extends BaseInterface, BasicAuthInterface {}
export class Auth extends Model<
  InferAttributes<Auth>,
  InferCreationAttributes<Auth>
> {
  public id!: string;
  public email!: string;
  public password!: string;
  userId: ForeignKey<number>;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Auth.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: uuid(),
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  { sequelize, tableName: "auth" }
);
