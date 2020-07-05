const connection = require("../../database/connection");
const { where } = require("../../database/connection");

class RankingClassController {
  static async index(request, response) {
    const accessId = String(request.header('access_id'));

    const classroom = await connection('classrooms')
      .select('classrooms.*')
      .join('users', 'users.classroomId', 'classrooms.id')
      .where('users.accessId', '=', accessId)
      .first();

    let studentsOfClass = await connection('users')
      .select('users.*')
      .where('users.classroomId', '=', classroom.id);

    studentsOfClass = studentsOfClass.sort((a, b) => {
      return a.points + b.points;
    });

    return response.status(200).json(studentsOfClass);
  }
}

module.exports = RankingClassController;
