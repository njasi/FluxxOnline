import { NextFunction, Request, Response } from "express";
import HttpException from "../../exceptions/HttpException";
import * as path from "path";

function not_found(request: Request, response: Response, next: NextFunction) {
  if (path.extname(request.path).length) {
    next(new HttpException(404, "Not Found"));
  } else {
    next();
  }
}

export default not_found;
