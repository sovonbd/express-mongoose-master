import { Request, Response } from "express";
import { StudentService } from "./student.service";

// step - 5: control the result from db and update to route
const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body;
    const result = await StudentService.createStudentintoDB(student);
    res.status(200).json({
      success: true,
      mesage: "Student is created successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const StudentControllers = {
  createStudent,
};
