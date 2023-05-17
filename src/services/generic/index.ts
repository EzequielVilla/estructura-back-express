// import { BaseInterface } from "../../models/base";

import { BuildOptions, Model } from "sequelize";
import { BaseInterface } from "../../models/base";

export interface UnknownObject {
  [key: string]: any;
}

type ModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): Model;
};

export class GenericCrud {
  static async findByIDInDB<T>(
    model: ModelStatic,
    data: BaseInterface
  ): Promise<T | null> {
    try {
      return (await model.findByPk(data.id)) as T;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async findALlInDB<T>(
    model: ModelStatic,
    data: UnknownObject
  ): Promise<T[] | null> {
    try {
      return (await model.findAll({ where: data })) as T[];
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async findOneInDB<T>(
    model: ModelStatic,
    data: UnknownObject
  ): Promise<T | null> {
    try {
      return (await model.findOne({ where: data })) as T;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async createInDB<T>(
    model: ModelStatic,
    data: UnknownObject
  ): Promise<T> {
    try {
      return (await model.create({ ...data })) as T;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async updateInDB<T>(
    model: ModelStatic,
    keyToChange: UnknownObject,
    whereObject: UnknownObject
  ): Promise<T> {
    try {
      const condition = {};
      Object.keys(whereObject).forEach((key) => {
        condition[key] = whereObject[key];
      });

      return (await model.update(keyToChange, {
        where: {
          ...condition,
        },
      })) as T;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
