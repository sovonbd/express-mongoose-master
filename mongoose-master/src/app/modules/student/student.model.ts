import { model, Schema } from "mongoose";
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from "./student.interface";

// step 2 - schema
const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: String,
  lastName: {
    type: String,
    required: true,
  },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: String,
  fatherOccupation: String,
  fatherContactNo: String,
  motherName: String,
  motherOccupation: String,
  motherContactNo: String,
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: String,
  occupation: String,
  contactNo: String,
  address: String,
});

const studentSchema = new Schema<Student>({
  id: String,
  name: userNameSchema,
  gender: ["male", "female"], // use enum when you have predefined value, like male female declared in interface
  dateOfBirth: String,
  email: String,
  contactNo: String,
  emergencyContactNo: String,
  bloogGroup: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  presentAddress: String,
  permanentAddres: String,
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImg: String,
  isActive: ["active", "blocked"],
});

// step -3 create model

export const StudentModel = model<Student>("Student", studentSchema);
