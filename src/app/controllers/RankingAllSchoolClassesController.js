const connection = require("../../database/connection");

class RankingAllSchoolClassesController {
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
    
    classrooms = classrooms.map(classroom => { 
      classroom.students = [];
      classroom.totalPoints = 0;
      return classroom;
    })

    for(const classroom of classrooms) {
      const student = await connection('users')
        .select('users.*')
        .where('users.classroomId', '=', classroom.id)
        .first();

      classroom.students.push(student.points);
      classroom.totalPoints += student.points;
    }

    classrooms = classrooms.sort((a, b) => {
      return a.totalPoints + b.totalPoints
    });

    return response.status(200).json(classrooms);
  }
}

module.exports = RankingAllSchoolClassesController;
