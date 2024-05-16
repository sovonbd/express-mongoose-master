import { Student } from "./student.interface";
import { StudentModel } from "./student.model";

// step - 4 : Query in db and send to controller
const createStudentintoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

export const StudentService = {
  createStudentintoDB,
};
