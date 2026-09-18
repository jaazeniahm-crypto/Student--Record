app.js
const students = [
  {
    id: 1,
    name: "Juan Dela Cruz",
    age: 18,
    grade: 90
  },
  {
    id: 2,
    name: "Maria Santos",
    age: 19,
    grade: 85
  },
  {
    id: 3,
    name: "Pedro Reyes",
    age: 18,
    grade: 95
  },
  {
    id: 4,
    name: "Ana Garcia",
    age: 19,
    grade: 88
  },
  {
    id: 5,
    name: "Mark Lopez",
    age: 18,
    grade: 92
  }
];

console.log("===== STUDENT RECORDS REPORT =====");

console.log(`Total Students: ${students.length}`);

const totalGrade = students.reduce(
  (sum, student) => sum + student.grade,
  0
);

const averageGrade = totalGrade / students.length;

console.log(`Average Grade: ${averageGrade.toFixed(2)}`);

const highest = students.reduce((best, student) =>
  student.grade > best.grade ? student : best
);

const lowest = students.reduce((worst, student) =>
  student.grade < worst.grade ? student : worst
);

console.log(
  `Highest Grade: ${highest.name} - ${highest.grade}`
);

console.log(
  `Lowest Grade: ${lowest.name} - ${lowest.grade}`
);

const sortedStudents = [...students].sort(
  (a, b) => b.grade - a.grade
);

console.log("\n===== STUDENTS HIGHEST TO LOWEST =====");

sortedStudents.forEach((student, index) => {
  console.log(
    `${index + 1}. ${student.name} - ${student.grade}`
  );
});
