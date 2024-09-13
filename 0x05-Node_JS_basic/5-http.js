const http = require('http');
const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.trim().split('\n').filter((line) => line);
    const students = lines.slice(1);

    let output = `Number of students: ${students.length}\n`;

    const fields = {};
    students.forEach((student) => {
      const [firstName, , , field] = student.split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    });

    Object.entries(fields).forEach(([field, names]) => {
      output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
    });

    return output;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.writeHead(200);
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200);
    try {
      const dbContent = await countStudents(process.argv[2]);
      res.end(`This is the list of our students\n${dbContent}`);
    } catch (error) {
      res.end(`This is the list of our students\n${error.message}`);
    }
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

app.listen(1245, () => {
  console.log('Server running on port 1245');
});

module.exports = app;
