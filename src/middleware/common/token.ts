import { Response, Request, NextFunction } from "express";
import parseToken from "parse-bearer-token";
import { JWTToken } from "../../libs/jwt";

async function authMiddleware(req: Request, res: Response, next: NextFunction) {
  try {
    const token = parseToken(req);
    if (!token) {
      res.status(401).json({ message: "No token in auth" });
    } else {
      const verify = JWTToken.verify(token as string);
      if (verify) {
        next();
      }
    }
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
}

export { authMiddleware };
