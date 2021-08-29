import express from "express";
import { MySQLConnection } from "./interface/database/MySQL/MySQLConnection";
import dotenv from "dotenv";
import { router } from "./infrastructure/router";
const res = dotenv.config();
console.log(res.parsed);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//CROS対応（というか完全無防備：本番環境ではだめ絶対）
app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
  }
);

// Route設定
app.use("/api", router);

app.listen(3000, () => {
  console.log("Start on port 3000.");
});
