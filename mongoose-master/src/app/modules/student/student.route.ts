import express from "express";
import { StudentControllers } from "./student.controller";

// step-6: create the api route and exchange the data
const router = express.Router();

router.post("/create-student", StudentControllers.createStudent);
