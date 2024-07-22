export default function iterateThroughObject(reportWithIterator) {
  const employees = [];

  for (const item of reportWithIterator) {
    if (typeof item === 'string') {
      employees.push(item);
    } else if (Array.isArray(item)) {
      employees.push(...item);
    }
  }

  return employees.join(' | ');
}
