import { User } from "../../models/user";
import { GenericCrud } from "../generic";

export class UserService extends GenericCrud {
  // Sin el generic aca irian los metodos clasicos de un crud -> find (options), findOne, findByPK, create, update, delete

  static updateToken(token: string, id: string) {
    try {
      return this.updateInDB<User>(User as any, { token }, { AuthId: id });
    } catch (error) {
      console.log({ error: "Can't update token" });

      throw new Error("Token error");
    }
  }
}
