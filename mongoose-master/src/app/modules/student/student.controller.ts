import { Request, Response } from "express";
import { StudentService } from "./student.service";

// step - 5: control the result from db and update to route
const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    const result = await StudentService.createStudentIntoDB(studentData);
    res.status(200).json({
      success: true,
      mesage: "Student is created successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "Something is wrong",
      data: error,
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentService.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      mesage: "Students are retrived successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { id: studentId } = req.params;
    const result = await StudentService.getSingleStudentFromDB(studentId);
    console.log(result);
    res.status(200).json({
      success: true,
      message: "Student is retrived successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "Something is wrong",
      data: error,
    });
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
