interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "London"
};

const studentsList: Student[] = [student1, student2];

function renderTable(students: Student[]): void {
  const table = document.createElement('table');
  const tableBody = document.createElement('tbody');

  const headerRow = document.createElement('tr');
  const firstNameHeader = document.createElement('th');
  firstNameHeader.textContent = 'First Name';
  const locationHeader = document.createElement('th');
  locationHeader.textContent = 'Location';
  headerRow.appendChild(firstNameHeader);
  headerRow.appendChild(locationHeader);
  tableBody.appendChild(headerRow);

  students.forEach((student) => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  document.body.appendChild(table);
}

document.addEventListener('DOMContentLoaded', () => {
  renderTable(studentsList);
});
