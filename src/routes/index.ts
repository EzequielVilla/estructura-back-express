import express, { Response, Request } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).send("health check");
});

export default router;
