import * as yup from "yup";
import { Response, Request, NextFunction } from "express";

const authSchema = yup.object({
  body: yup
    .object({
      email: yup.string().required(),
      password: yup.string().required(),
      name: yup.string().required(),
      lastName: yup.string().required(),
      birthDate: yup.string().required(),
      age: yup.number().required(),
    })
    .noUnknown(true)
    .strict(true),
});

export async function validateAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const validate = await authSchema.validate({ body: req.body });
    if (validate) return next();
  } catch (error) {
    res.status(400).json({ field: "body", message: error.message });
  }
}
