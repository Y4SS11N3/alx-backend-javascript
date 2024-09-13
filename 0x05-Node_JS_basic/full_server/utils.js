const fs = require('fs').promises;

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8')
      .then((data) => {
        const lines = data.trim().split('\n').slice(1);
        const studentsByField = {};

        lines.forEach((line) => {
          const [firstName, , , field] = line.split(',');
          if (!studentsByField[field]) {
            studentsByField[field] = [];
          }
          studentsByField[field].push(firstName);
        });

        resolve(studentsByField);
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = readDatabase;
