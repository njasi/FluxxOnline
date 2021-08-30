const PORT = process.env.PORT || 8080;
import App from "./app";
import APIController from "./controller/api";
import IndexHTMLController from "./controller/indexHTML";
import StaticController from "./controller/static";

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

async function bootApp() {
  const app = new App([
    new APIController(),
    new StaticController(),
    new IndexHTMLController()
  ]);
  await app.listen();
}

if (require.main === module) {
  bootApp();
}
