import Student from '../models/student.js';

export async function getStudents({
  page,
  perPage,
  sortBy,
  sortOrder,
  filter,
}) {
  const skip = page > 0 ? (page - 1) * perPage : 0;

  const StudentQuery = Student.find();

  if (typeof filter.minYear !== 'undefined') {
    StudentQuery.where('year').gte(filter.minYear);
  }

  if (typeof filter.maxYear !== 'undefined') {
    StudentQuery.where('year').lte(filter.maxYear);
  }

  const [total, students] = await Promise.all([
    Student.countDocuments(StudentQuery),
    StudentQuery.sort({ [sortBy]: sortOrder })
      .skip(skip)
      .limit(perPage),
  ]);
  const totalPages = Math.ceil(total / perPage);
  return {
    students,
    total,
    page,
    perPage,
    totalPages,
    hasNextPage: page < totalPages,
    hasPreviousPage: page > 1,
  };

  // const count = await Student.countDocuments();

  // console.log(count);

  // return Student.find().skip(skip).limit(perPage);
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
