import express, { Application } from "express";
import cors from "cors";
import { StudentRoutes } from "./app/modules/student/student.route";
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// application routes
// app.use("/", StudentRoutes);
app.use("/api/v1/students", StudentRoutes);

// const Acontroller = (req: Request, res: Response) => {
//   res.send("Hello");
// };

// app.get("/", Acontroller);

export default app;
