interface MajorCredits {
  credits: number;
  __brand: 'MajorCredits';
}

interface MinorCredits {
  credits: number;
  __brand: 'MinorCredits';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'MajorCredits',
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'MinorCredits',
  };
}

const majorSubject1: MajorCredits = { credits: 3, __brand: 'MajorCredits' };
const majorSubject2: MajorCredits = { credits: 4, __brand: 'MajorCredits' };

const minorSubject1: MinorCredits = { credits: 1, __brand: 'MinorCredits' };
const minorSubject2: MinorCredits = { credits: 2, __brand: 'MinorCredits' };

console.log(sumMajorCredits(majorSubject1, majorSubject2));
console.log(sumMinorCredits(minorSubject1, minorSubject2));

// console.log(sumMajorCredits(majorSubject1, minorSubject1));
