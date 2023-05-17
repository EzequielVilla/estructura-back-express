import express, { Response, Request } from "express";
import { validateAuth } from "../middleware/schema/auth/post";

import { AuthController } from "../controllers/auth";
const router = express.Router();

router.post("/", validateAuth, AuthController.createAuth);
router.post("/token", AuthController.createToken);

export default router;
