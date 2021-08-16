const getMessagesForBestStudents = (allStudentsList, studentsForRetake) =>
  allStudentsList
    .filter(allStudentsList => !allStudentsList.slice().includes(studentsForRetake))
    .map(student => 'Good job, ' + student);

