import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((studentsByField) => {
        let responseText = 'This is the list of our students\n';
        const sortedFields = Object.keys(studentsByField).sort((a, b) => 
          a.localeCompare(b, 'en', { sensitivity: 'base' })
        );

        sortedFields.forEach((field) => {
          const students = studentsByField[field];
          responseText += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
        });

        response.status(200).send(responseText.trim());
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(process.argv[2])
      .then((studentsByField) => {
        const students = studentsByField[major] || [];
        response.status(200).send(`List: ${students.join(', ')}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
