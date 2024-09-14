const fs = require('fs').promises;

async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.trim().split('\n').filter((line) => line);
    const students = lines.slice(1);

    const fields = {};
    students.forEach((student) => {
      const [firstName, , , field] = student.split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    });

    return fields;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = readDatabase;
