// In this folder we have all the controllers
// We SHOULD NOT have any logic in this folder unless if it is for parsing data fron the request

import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { BasicAuthInterface } from "../../models/auth";
import { BasicUserInterface } from "../../models/user";
import { AuthService } from "../../services/auth";
interface FirstCreate extends BasicAuthInterface, BasicUserInterface {}

export namespace AuthController {
  export const createAuth = asyncHandler(
    async (req: Request, res: Response) => {
      const data = req.body as any as FirstCreate;
      try {
        const user = await AuthService.register(data);
        res.status(201).json(user);
      } catch (error) {
        console.log({ error });

        res.status(400).json({ message: error.message });
      }
    }
  );
  export const createToken = asyncHandler(
    async (req: Request, res: Response) => {
      const authInfo = req.body as any as BasicAuthInterface;
      try {
        const token = await AuthService.login(authInfo);
        res.status(200).json({ token });
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    }
  );
}
