import express, { NextFunction, Request, Response } from "express";
const app = express();

// parsers
app.use(express.json());

// middleware - used for authentication
const logger = (req: Request, res: Response, next: NextFunction) => {
  // console.log(req.url, req.method, req.hostname);
  next();
};

// Router
const userRouter = express.Router();
const courseRouter = express.Router();

app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);

userRouter.post("/create-user", (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    success: true,
    message: "User Created",
    data: req.body,
  });
});

courseRouter.post("/create-course", (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    success: true,
    message: "Course Created",
    data: req.body,
  });
});

app.get("/", logger, (req: Request, res: Response) => {
  // console.log(req.query.email);
  res.send("Hello Worldsss!");
});

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.send("Recevied!");
});

export default app;
