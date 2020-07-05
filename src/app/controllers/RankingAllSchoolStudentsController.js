const connection = require("../../database/connection");

class RankingAllSchoolStudentsController {
  static async index(request, response) {
    const accessId = String(request.header('access_id'));

    const school = await connection('users')
      .select('schools.*')
      .join('classrooms', 'classrooms.id', 'users.classroomId')
      .join('schools', 'schools.id', 'classrooms.schoolId')
      .where('users.accessId', '=', accessId)
      .first();

    let classrooms = await connection('classrooms')
      .select('classrooms.*')
      .join('schools', 'schools.id', 'classrooms.schoolId')
      .where('schools.id', '=', school.id);
    
    let students = []

    for(const classroom of classrooms) {
      const studentsOfClassroom = await connection('users')
        .select('users.*')
        .where('users.classroomId', '=', classroom.id);

      students.push(...studentsOfClassroom);
    }

    students = students.sort((a, b) => {
      return a.points - b.points;
    });

    students = students.reverse();

    if(students.length >= 3) {
      return response.status(200).json([students[0], students[1], students[2]]);
    }

    return response.status(200).json(students);
  }
}

module.exports = RankingAllSchoolStudentsController;
