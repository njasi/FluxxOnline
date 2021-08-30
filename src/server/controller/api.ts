import * as express from "express";

class APIController {
  public router = express.Router();
  public path = "/api";

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes() {
    // nothing yet
  }
}

export default APIController;
