require("dotenv").config();
import * as jwt from "jsonwebtoken";

export namespace JWTToken {
  export function create(data: any) {
    console.log({ secret: process.env.JWT_SECRET });

    return jwt.sign({ data }, process.env.JWT_SECRET as string);
  }

  export function verify(token: string) {
    return jwt.verify(token, process.env.JWT_SECRET as string);
  }

  export function decode(token: string) {
    return jwt.decode(token);
  }
}
