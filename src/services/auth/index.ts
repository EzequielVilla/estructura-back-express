import { Auth, BasicAuthInterface } from "../../models/auth";
import { BasicUserInterface, User } from "../../models/user";
import { UserService } from "../user";
import { JWTToken } from "../../libs/jwt";
import { GenericCrud } from "../generic";

interface FirstCreate extends BasicAuthInterface, BasicUserInterface {}

export class AuthService extends GenericCrud {
  static async register(data: FirstCreate) {
    try {
      const { age, birthDate, email, lastName, name, password } = data;
      const auth = await this.createInDB<Auth>(Auth as any, {
        email,
        password,
      });
      const userData = { age, birthDate, lastName, name, AuthId: auth.id };
      const user = await this.createInDB<User>(User as any, userData);
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async login(data: BasicAuthInterface) {
    const { email, password } = data;
    try {
      const auth = await this.findOneInDB<Auth>(Auth as any, {
        email,
        password,
      });
      const token = JWTToken.create(auth);
      await UserService.updateToken(token, auth.id);
      return token;
    } catch (error) {
      console.log({ error: "Can't create token" });
      throw new Error(error.message);
    }
  }
}
