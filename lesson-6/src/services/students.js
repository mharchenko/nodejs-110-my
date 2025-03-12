import Student from '../models/student.js';

export function getStudents() {
  return Student.find();
}

export function getStudent(studentId) {
  return Student.findById(studentId);
}

export function deleteStudent(studentId) {
  return Student.findByIdAndDelete(studentId);
}

export function createStudent(student) {
  return Student.create(student);
}

export async function replaceStudent(studentId, student) {
  const result = await Student.findByIdAndUpdate(studentId, student, {
    new: true,
    upsert: true,
    includeResultMetadata: true,
  });
  return {
    values: result.value,
    updatedExisting: result.lastErrorObject.updatedExisting,
  };
}

export function updateStudent(studentId, student) {
  return Student.findByIdAndUpdate(studentId, student, { new: true });
}
