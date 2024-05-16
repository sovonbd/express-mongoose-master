import express, { Application, Request, Response } from "express";
import cors from "cors";
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

const Acontroller = (req: Request, res: Response) => {
  res.send("Hello");
};

app.get("/", Acontroller);

export default app;
