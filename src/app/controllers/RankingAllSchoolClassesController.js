const connection = require("../../database/connection");

class RankingAllSchoolClassesController {
  static async index(request, response) {
    const accessId = String(request.header('access_id'));

    const classrooms = await connection('users')
      .select('classrooms.*')
      .join('classrooms', 'classrooms.id', 'users.classroomId')
      .where('users.accessId', '=', accessId)
      .first();

    const students = await connection('users')
      .select([
        'users.id AS userId',
        'users.name',
        'users.points',
        'users.classroomId',
        'classrooms.name AS classroomName '
      ])
      .join('classrooms', 'classrooms.id', 'users.id')
      .where('classrooms.schoolId', '=', school.id);

    const classes = students.map()

    return response.status(200).json(students);
  }
}

module.exports = RankingAllSchoolClassesController;
