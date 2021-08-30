import * as express from "express";
import * as path from "path";

class StaticController {
  public router = express.Router();
  public path = "/";

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.use(express.static(path.join(__dirname, "..", "public")));
  }
}

export default StaticController;
