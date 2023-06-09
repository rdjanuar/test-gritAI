import { Request, Response, NextFunction } from "express";

export const guard = (req: Request, res: Response, next: NextFunction) => {
  if (req.headers["user-id"] !== "ifabula" || req.headers["scope"] !== "user") {
    res.status(401);
    res.send({
      responseCode: 401,
      responseMessage: "UNAUTHORIZED",
    });
  }
  next();
};
