import * as express from "express";
import * as morgan from "morgan";
import * as compression from "compression";
import Controller from "./controller/interface";
import errorMiddleware from "./middleware/error.middleware";
// import {Server} from "socket.io"
// import socket from "./socket/index";

class App {
  public app: express.Application;

  constructor(controllers: Controller[]) {
    this.app = express();

    this.connectToTheDatabase();
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
    this.initializeErrorHandling();
  }

  public listen() {
    const PORT = process.env.PORT || 8080;
    this.app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}`);
    });

    // register sockets
    // const io = new Server(this.app);
    // socket(io);
  }

  public getServer() {
    return this.app;
  }

  private initializeMiddlewares() {
    this.app.use(morgan("dev")); // logging
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(compression());
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }

  private initializeControllers(controllers: Controller[]) {
    controllers.forEach((controller) => {
      this.app.use("/", controller.router);
    });
  }

  private connectToTheDatabase() {
    // no db in this project
  }
}

export default App;
