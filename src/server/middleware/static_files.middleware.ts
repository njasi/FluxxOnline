import { NextFunction, Request, Response } from "express";
import * as express from "express";
import * as path from "path";

// static file-serving middleware
function static_files(
  request: Request,
  response: Response,
  next: NextFunction
) {
  express.static(path.join(__dirname, "..", "public"));
}

export default static_files;
