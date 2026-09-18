const students = [
  {
    id: 1,
    name: "Alyssa Mae Cruz",
    year: 1,
    course: "BSIT",
    grades: [92, 90, 94, 91],
    enrolled: true,
  },
  {
    id: 2,
    name: "Brian Santos",
    year: 2,
    course: "BSCS",
    grades: [88, 91, 89, 90],
    enrolled: true,
  },
  {
    id: 3,
    name: "Carla Reyes",
    year: 3,
    course: "BSBA",
    grades: [95, 93, 96, 94],
    enrolled: true,
  },
  {
    id: 4,
    name: "Daniel Garcia",
    year: 4,
    course: "BSED",
    grades: [86, 88, 85, 89],
    enrolled: false,
  },
  {
    id: 5,
    name: "Ella Marie Flores",
    year: 1,
    course: "BSIT",
    grades: [90, 92, 91, 93],
    enrolled: true,
  },
  {
    id: 6,
    name: "Francis Dela Cruz",
    year: 2,
    course: "BSCS",
    grades: [84, 87, 86, 88],
    enrolled: true,
  },
  {
    id: 7,
    name: "Grace Villanueva",
    year: 3,
    course: "BSBA",
    grades: [91, 90, 94, 92],
    enrolled: true,
  },
  {
    id: 8,
    name: "Henry Mendoza",
    year: 4,
    course: "BSED",
    grades: [89, 87, 90, 88],
    enrolled: true,
  },
  {
    id: 9,
    name: "Isabella Torres",
    year: 1,
    course: "BSIT",
    grades: [97, 95, 96, 98],
    enrolled: true,
  },
  {
    id: 10,
    name: "Joshua Navarro",
    year: 2,
    course: "BSCS",
    grades: [90, 88, 92, 91],
    enrolled: false,
  },
  {
    id: 11,
    name: "Karen Bautista",
    year: 3,
    course: "BSBA",
    grades: [87, 89, 90, 88],
    enrolled: true,
  },
  {
    id: 12,
    name: "Liam Aquino",
    year: 4,
    course: "BSED",
    grades: [93, 91, 92, 94],
    enrolled: true,
  },
  {
    id: 13,
    name: "Mia Fernandez",
    year: 1,
    course: "BSIT",
    grades: [85, 86, 88, 87],
    enrolled: true,
  },
  {
    id: 14,
    name: "Nathan Lim",
    year: 2,
    course: "BSCS",
    grades: [94, 92, 95, 93],
    enrolled: true,
  },
  {
    id: 15,
    name: "Olivia Ramos",
    year: 3,
    course: "BSBA",
    grades: [89, 91, 88, 90],
    enrolled: false,
  },
  {
    id: 16,
    name: "Paolo Castillo",
    year: 4,
    course: "BSED",
    grades: [90, 89, 91, 92],
    enrolled: true,
  },
  {
    id: 17,
    name: "Queenie Tan",
    year: 1,
    course: "BSIT",
    grades: [93, 94, 92, 95],
    enrolled: true,
  },
  {
    id: 18,
    name: "Rafael Ong",
    year: 2,
    course: "BSCS",
    grades: [86, 85, 88, 87],
    enrolled: true,
  },
  {
    id: 19,
    name: "Samantha Perez",
    year: 3,
    course: "BSBA",
    grades: [96, 94, 95, 97],
    enrolled: true,
  },
  {
    id: 20,
    name: "Tristan Gomez",
    year: 4,
    course: "BSED",
    grades: [84, 86, 85, 87],
    enrolled: false,
  },
  {
    id: 21,
    name: "Angela Manalo",
    year: 1,
    course: "BSIT",
    grades: [88, 90, 89, 91],
    enrolled: true,
  },
  {
    id: 22,
    name: "Benjamin Co",
    year: 2,
    course: "BSCS",
    grades: [91, 93, 90, 92],
    enrolled: true,
  },
  {
    id: 23,
    name: "Chloe Rivera",
    year: 3,
    course: "BSBA",
    grades: [92, 94, 93, 95],
    enrolled: true,
  },
  {
    id: 24,
    name: "David Soriano",
    year: 4,
    course: "BSED",
    grades: [88, 90, 87, 89],
    enrolled: true,
  },
  {
    id: 25,
    name: "Erika Salazar",
    year: 1,
    course: "BSIT",
    grades: [96, 97, 95, 94],
    enrolled: true,
  },
  {
    id: 26,
    name: "Gabriel Tan",
    year: 2,
    course: "BSCS",
    grades: [89, 90, 88, 91],
    enrolled: false,
  },
  {
    id: 27,
    name: "Hannah Lee",
    year: 3,
    course: "BSBA",
    grades: [86, 89, 87, 88],
    enrolled: true,
  },
  {
    id: 28,
    name: "Ian Mercado",
    year: 4,
    course: "BSED",
    grades: [95, 93, 94, 96],
    enrolled: true,
  },
  {
    id: 29,
    name: "Julia Castro",
    year: 1,
    course: "BSIT",
    grades: [],
    enrolled: true,
  },
  {
    id: 30,
    name: "Kevin Diaz",
    year: 2,
    course: "BSCS",
    grades: [83, 85, 84, 86],
    enrolled: false,
  },
];

// Return the average grade of one student.
// A student with no grades gets 0.
function getAverageGrade(student) {
  if (
    !student ||
    !Array.isArray(student.grades) ||
    student.grades.length === 0
  ) {
    return 0;
  }

  return (
    student.grades.reduce((sum, grade) => sum + Number(grade), 0) /
    student.grades.length
  );
}

// Return a NEW array containing the top n students.
// The original students array is never modified.
function getTopStudents(students, n) {
  if (!Array.isArray(students)) {
    throw new TypeError("getTopStudents: students must be an array.");
  }

  if (!Number.isInteger(n) || n < 0) {
    throw new RangeError("getTopStudents: n must be a non-negative integer.");
  }

  return students
    .map((student) => ({
      ...student,
      averageGrade: getAverageGrade(student),
    }))
    .sort((a, b) => b.averageGrade - a.averageGrade)
    .slice(0, n);
}

// Group students by course without changing the original array.
function groupByCourse(students) {
  if (!Array.isArray(students)) {
    throw new TypeError("groupByCourse: students must be an array.");
  }

  return students.reduce((groups, student) => {
    const course = student.course || "Unknown";
    if (!groups[course]) {
      groups[course] = [];
    }
    groups[course].push({ ...student });
    return groups;
  }, {});
}

// Count enrolled and not-enrolled students.
function getEnrolledCount(students) {
  if (!Array.isArray(students)) {
    throw new TypeError("getEnrolledCount: students must be an array.");
  }

  return {
    enrolled: students.filter((student) => student.enrolled === true).length,
    notEnrolled: students.filter((student) => student.enrolled !== true).length,
  };
}

// Case-insensitive name search.
// Returns a NEW student object or null.
function findStudent(students, name) {
  if (!Array.isArray(students)) {
    throw new TypeError("findStudent: students must be an array.");
  }

  if (typeof name !== "string" || name.trim() === "") {
    return null;
  }

  const searchName = name.trim().toLowerCase();

  const found = students.find(
    (student) =>
      typeof student.name === "string" &&
      student.name.toLowerCase() === searchName
  );

  return found ? { ...found, grades: [...found.grades] } : null;
}

// Return course averages sorted from highest to lowest.
function getCourseAverages(students) {
  if (!Array.isArray(students)) {
    throw new TypeError("getCourseAverages: students must be an array.");
  }

  const grouped = groupByCourse(students);

  return Object.entries(grouped)
    .map(([course, courseStudents]) => {
      const gradeValues = courseStudents
        .map((student) => getAverageGrade(student))
        .filter((average) => average > 0);

      const averageGrade =
        gradeValues.length === 0
          ? 0
          : gradeValues.reduce((sum, average) => sum + average, 0) /
            gradeValues.length;

      return {
        course,
        studentCount: courseStudents.length,
        averageGrade,
      };
    })
    .sort((a, b) => b.averageGrade - a.averageGrade);
}

// Build one summary object containing all requested information.
function exportSummary(students) {
  if (!Array.isArray(students)) {
    throw new TypeError("exportSummary: students must be an array.");
  }

  const topStudents = getTopStudents(students, 1);
  const gradeAverages = students
    .map((student) => getAverageGrade(student))
    .filter((average) => average > 0);

  const overallAverage =
    gradeAverages.length === 0
      ? 0
      : gradeAverages.reduce((sum, average) => sum + average, 0) /
        gradeAverages.length;

  return {
    totalStudents: students.length,
    overallAverageGrade: Number(overallAverage.toFixed(2)),
    topPerformingStudent:
      topStudents.length > 0
        ? {
            id: topStudents[0].id,
            name: topStudents[0].name,
            course: topStudents[0].course,
            averageGrade: Number(topStudents[0].averageGrade.toFixed(2)),
          }
        : null,
    breakdownByCourse: getCourseAverages(students),
    enrollment: getEnrolledCount(students),
  };
}

// Optional stretch goal: filter by year.
function filterByYear(students, year) {
  if (!Array.isArray(students)) {
    throw new TypeError("filterByYear: students must be an array.");
  }

  return students
    .filter((student) => student.year === year)
    .map((student) => ({ ...student }));
}

// Optional stretch goal: sort alphabetically by name.
function sortByName(students) {
  if (!Array.isArray(students)) {
    throw new TypeError("sortByName: students must be an array.");
  }

  return [...students].sort((a, b) => a.name.localeCompare(b.name));
}

// Main program: prints a complete, clearly labeled report.
function main() {
  console.log("========================================");
  console.log(" STUDENT RECORDS DATA REPORT");
  console.log("========================================");

  const summary = exportSummary(students);

  console.log("\nTOTAL STUDENTS");
  console.log(summary.totalStudents);

  console.log("\nOVERALL AVERAGE GRADE");
  console.log(summary.overallAverageGrade.toFixed(2));

  console.log("\nENROLLMENT");
  console.log("Enrolled:", summary.enrollment.enrolled);
  console.log("Not Enrolled:", summary.enrollment.notEnrolled);

  console.log("\nTOP 5 STUDENTS");
  getTopStudents(students, 5).forEach((student, index) => {
    console.log(
      `${index + 1}. ${student.name} - ${ student.course } - Average: ${student.averageGrade.toFixed(2)}`
    );
  });

  console.log("\nAVERAGE GRADE BY COURSE");
  summary.breakdownByCourse.forEach((item) => {
    console.log(
      `${item.course}: ${item.averageGrade.toFixed(2)} (${ item.studentCount } students)`
    );
  });

  console.log("\nFIND STUDENT");
  console.log("Search: Isabella Torres");
  console.log(findStudent(students, "isabella torres"));

  console.log("\nSEARCH FOR NON-EXISTING STUDENT");
  console.log("Search: John Doe");
  console.log(findStudent(students, "John Doe"));

  console.log("\nSUMMARY OBJECT");
  console.log(summary);

  console.log("\n========================================");
  console.log(" REPORT COMPLETE");
  console.log("========================================");
}

main();    {
        id: 14,
        name: "Joshua Fernandez",
        year: 2,
        course: "BSED",
        grades: [84, 86, 82, 88],
        enrolled: true
    },
    {
        id: 15,
        name: "Nicole Castillo",
        year: 3,
        course: "BSIT",
        grades: [92, 90, 94, 93],
        enrolled: true
    },
    {
        id: 16,
        name: "Ethan Ramirez",
        year: 4,
        course: "BSBA",
        grades: [80, 82, 85, 83],
        enrolled: false
    },
    {
        id: 17,
        name: "Isabella Cruz",
        year: 1,
        course: "BSCS",
        grades: [96, 95, 94, 97],
        enrolled: true
    },
    {
        id: 18,
        name: "Gabriel Santos",
        year: 2,
        course: "BSIT",
        grades: [88, 90, 86, 89],
        enrolled: true
    },
    {
        id: 19,
        name: "Sophia Martinez",
        year: 3,
        course: "BSED",
        grades: [91, 93, 90, 92],
        enrolled: true
    },
    {
        id: 20,
        name: "Nathaniel Garcia",
        year: 4,
        course: "BSCS",
        grades: [83, 85, 87, 84],
        enrolled: false
    },
    {
        id: 21,
        name: "Alyssa Torres",
        year: 1,
        course: "BSBA",
        grades: [90, 88, 92, 91],
        enrolled: true
    },
    {
        id: 22,
        name: "Jacob Reyes",
        year: 2,
        course: "BSIT",
        grades: [85, 87, 89, 86],
        enrolled: true
    },
    {
        id: 23,
        name: "Camille Flores",
        year: 3,
        course: "BSCS",
        grades: [93, 91, 95, 94],
        enrolled: true
    },
    {
        id: 24,
        name: "Lucas Mendoza",
        year: 4,
        course: "BSED",
        grades: [78, 82, 80, 84],
        enrolled: false
    },
    {
        id: 25,
        name: "Beatrice Aquino",
        year: 1,
        course: "BSIT",
        grades: [94, 92, 95, 93],
        enrolled: true
    },
    {
        id: 26,
        name: "Samuel Navarro",
        year: 2,
        course: "BSBA",
        grades: [86, 88, 85, 87],
        enrolled: true
    },
    {
        id: 27,
        name: "Ella Bautista",
        year: 3,
        course: "BSED",
        grades: [97, 96, 95, 98],
        enrolled: true
    },
    {
        id: 28,
        name: "Adrian Villanueva",
        year: 4,
        course: "BSIT",
        grades: [81, 84, 83, 85],
        enrolled: false
    },
    {
        id: 29,
        name: "Mia Fernandez",
        year: 1,
        course: "BSCS",
        grades: [89, 92, 90, 91],
        enrolled: true
    },
    {
        id: 30,
        name: "Carlos Castillo",
        year: 2,
        course: "BSBA",
        grades: [84, 86, 88, 85],
        enrolled: true
    }
];


// ------------------------------------------
// HELPER FUNCTION
// ------------------------------------------

function validateStudents(students) {
    if (!Array.isArray(students)) {
        throw new Error("Invalid input: students must be an array.");
    }
}


// ------------------------------------------
// 1. GET AVERAGE GRADE
// ------------------------------------------

function getAverageGrade(student) {
    if (!student || !Array.isArray(student.grades)) {
        return 0;
    }

    if (student.grades.length === 0) {
        return 0;
    }

    const total = student.grades.reduce(
        (sum, grade) => sum + Number(grade),
        0
    );

    return total / student.grades.length;
}


// ------------------------------------------
// 2. GET TOP STUDENTS
// ------------------------------------------

function getTopStudents(students, n) {
    validateStudents(students);

    if (typeof n !== "number" || Number.isNaN(n) || n < 0) {
        throw new Error(
            "Invalid input: n must be a non-negative number."
        );
    }

    return students
        .map(student => ({
            ...student,
            averageGrade: getAverageGrade(student)
        }))
        .sort((a, b) => b.averageGrade - a.averageGrade)
        .slice(0, Math.floor(n));
}


// ------------------------------------------
// 3. GROUP BY COURSE
// ------------------------------------------

function groupByCourse(students) {
    validateStudents(students);

    return students.reduce((groups, student) => {
        if (!groups[student.course]) {
            groups[student.course] = [];
        }

        groups[student.course].push({
            ...student
        });

        return groups;
    }, {});
}


// ------------------------------------------
// 4. GET ENROLLED COUNT
// ------------------------------------------

function getEnrolledCount(students) {
    validateStudents(students);

    const enrolled = students.filter(
        student => student.enrolled === true
    ).length;

    const notEnrolled = students.filter(
        student => student.enrolled === false
    ).length;

    return {
        enrolled: enrolled,
        notEnrolled: notEnrolled
    };
}


// ------------------------------------------
// 5. FIND STUDENT
// ------------------------------------------

function findStudent(students, name) {
    validateStudents(students);

    if (typeof name !== "string" || name.trim() === "") {
        return null;
    }

    const searchName = name.trim().toLowerCase();

    return (
        students.find(
            student => student.name.toLowerCase() === searchName
        ) || null
    );
}


// ------------------------------------------
// 6. GET COURSE AVERAGES
// ------------------------------------------

function getCourseAverages(students) {
    validateStudents(students);

    const grouped = groupByCourse(students);

    return Object.entries(grouped)
        .map(([course, courseStudents]) => {
            const total = courseStudents.reduce(
                (sum, student) =>
                    sum + getAverageGrade(student),
                0
            );

            const average = courseStudents.length > 0
                ? total / courseStudents.length
                : 0;

            return {
                course: course,
                averageGrade: average
            };
        })
        .sort((a, b) => b.averageGrade - a.averageGrade);
}


// ------------------------------------------
// 7. EXPORT SUMMARY
// ------------------------------------------

function exportSummary(students) {
    validateStudents(students);

    const totalStudents = students.length;

    const overallAverage = totalStudents > 0
        ? students.reduce(
            (sum, student) =>
                sum + getAverageGrade(student),
            0
        ) / totalStudents
        : 0;

    const topStudent = totalStudents > 0
        ? getTopStudents(students, 1)[0]
        : null;

    const courseBreakdown = getCourseAverages(students);

    return {
        totalStudents: totalStudents,
        overallAverageGrade: overallAverage,
        topPerformingStudent: topStudent,
        breakdownByCourse: courseBreakdown
    };
}


// ------------------------------------------
// OPTIONAL STRETCH GOAL 1
// FILTER BY YEAR
// ------------------------------------------

function filterByYear(students, year) {
    validateStudents(students);

    if (typeof year !== "number" || Number.isNaN(year)) {
        throw new Error(
            "Invalid input: year must be a number."
        );
    }

    return students.filter(student => student.year === year);
}


// ------------------------------------------
// OPTIONAL STRETCH GOAL 2
// SORT BY NAME
// ------------------------------------------

function sortByName(students) {
    validateStudents(students);

    return [...students].sort((a, b) =>
        a.name.localeCompare(b.name)
    );
}


// ------------------------------------------
// MAIN FUNCTION
// ------------------------------------------

function main() {

    console.log("==========================================");
    console.log("       STUDENT RECORDS DATA REPORT");
    console.log("==========================================");


    // Total students
    const summary = exportSummary(students);

    console.log("\n--- TOTAL STUDENTS ---");
    console.log("Total students:", summary.totalStudents);


    // Overall average
    console.log("\n--- OVERALL AVERAGE GRADE ---");
    console.log(
        "Overall average:",
        summary.overallAverageGrade.toFixed(2)
    );


    // Enrolled count
    const enrollment = getEnrolledCount(students);

    console.log("\n--- ENROLLMENT SUMMARY ---");
    console.log("Enrolled:", enrollment.enrolled);
    console.log("Not enrolled:", enrollment.notEnrolled);


    // Top students
    console.log("\n--- TOP 5 STUDENTS ---");

    const topStudents = getTopStudents(students, 5);

    topStudents.forEach((student, index) => {
        console.log(
            `${index + 1}. ${student.name} - ` +
            `${student.course} - ` +
            `Average: ${student.averageGrade.toFixed(2)}`
        );
    });


    // Course averages
    console.log("\n--- AVERAGE GRADE BY COURSE ---");

    const courseAverages = getCourseAverages(students);

    courseAverages.forEach(item => {
        console.log(
            `${item.course}: ` +
            `${item.averageGrade.toFixed(2)}`
        );
    });


    // Group by course
    console.log("\n--- STUDENTS GROUPED BY COURSE ---");

    const groups = groupByCourse(students);

    Object.entries(groups).forEach(
        ([course, courseStudents]) => {
            console.log(
                `${course}: ${courseStudents.length} students`
            );
        }
    );


    // Find student
    console.log("\n--- SEARCH STUDENT ---");

    const searchResult = findStudent(
        students,
        "Maria Santos"
    );

    if (searchResult) {
        console.log("Student found:", searchResult.name);
        console.log("Course:", searchResult.course);
        console.log(
            "Average:",
            getAverageGrade(searchResult).toFixed(2)
        );
    } else {
        console.log("Student not found.");
    }


    // Search for non-existing student
    const missingStudent = findStudent(
        students,
        "Unknown Student"
    );

    console.log(
        "\nSearch for 'Unknown Student':",
        missingStudent
    );


    // Export summary
    console.log("\n--- COMPLETE SUMMARY OBJECT ---");
    console.log(summary);


    // Optional: filter by year
    console.log("\n--- YEAR 1 STUDENTS ---");

    const firstYearStudents = filterByYear(students, 1);

    console.log(
        firstYearStudents.map(student => student.name)
    );


    // Optional: sorted names
    console.log("\n--- STUDENTS SORTED BY NAME ---");

    const alphabeticalStudents = sortByName(students);

    console.log(
        alphabeticalStudents.map(student => student.name)
    );


    console.log("\n==========================================");
    console.log("             REPORT COMPLETE");
    console.log("==========================================");
}


// ------------------------------------------
// RUN PROGRAM
// ------------------------------------------

main();
