const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const students = await readDatabase(process.argv[2]);
      let output = 'This is the list of our students\n';
      const sortedFields = Object.keys(students).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
      sortedFields.forEach((field) => {
        output += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
      });
      response.status(200).send(output);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    try {
      const students = await readDatabase(process.argv[2]);
      if (students[major]) {
        response.status(200).send(`List: ${students[major].join(', ')}`);
      } else {
        response.status(200).send('No students found for the specified major');
      }
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
