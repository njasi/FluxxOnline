import * as express from "express";
import * as path from "path";
import not_found from "../middleware/not_found.middleware";

class IndexHTMLController {
  public router = express.Router();
  public path = "*";

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.use(not_found);
    this.router.use(this.path, this.sendIndex);
  }

  private sendIndex(req: express.Request, res: express.Response) {
    res.sendFile(path.join(__dirname, "../../..", "public/index.html"));
  }
}

export default IndexHTMLController;
