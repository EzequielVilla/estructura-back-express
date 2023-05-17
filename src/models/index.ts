import { Auth } from "./auth";
import { User } from "./user";

// USER-AUTH RELATIONSHIP
Auth.hasOne(User);
User.belongsTo(Auth);

export { Auth, User };
