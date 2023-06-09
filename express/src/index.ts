import express, { Express, Request, Response } from "express";
import bodyparser from "body-parser";
import { guard } from "./middleware";

const app: Express = express();
const port = process.env.PORT || 4000;

app.use(bodyparser.json());
app.use(guard);

app.get("/", (req: Request, res: Response) => {
  res.send({
    data: "mabar",
  });
});

app.post("/", (req: Request, res: Response) => {
  const { username } = req.body;

  res.send({
    data: username,
  });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
