import { Student } from "./student.interface";
import { StudentModel } from "./student.model";
// step - 4 : service - create Query model for db and send to controller

const createStudentIntoDB = async (student: Student) => {
  // console.log(student);
  const result = await StudentModel.create(student);
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  // console.log(id);
  const result = await StudentModel.findOne({ id: id });
  return result;
};
export const StudentService = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
