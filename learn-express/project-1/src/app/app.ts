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

//
app.get(
  "/",
  logger,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log(req.body);
      res.send("Hello Worldsss!");
    } catch (error) {
      next(error);
    }
  }
);

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.send("Recevied!");
});

//

// Route error handling
app.all("*", (error: any, req: Request, res: Response) => {
  // console.log(error);
  res.status(400).json({
    success: false,
    message: "Route not found",
  });
});

// global error handling
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  // console.log(error);
  res.status(400).json({
    success: false,
    message: "Failed ot get data",
  });
});

export default app;
