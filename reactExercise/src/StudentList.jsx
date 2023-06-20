import React, { useState, useEffect } from 'react';
import { studentData } from './Data';
import StudentCard from './StudentCard';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setStudents(studentData.length ? studentData : [{ id: 0, name: 'No Data Available', address: '', bloodGroup: '' }]);
    }, 1000);
  }, []);

  const handleShowStudents = () => {
    setShowButton(false);
  };

  return (
    <div>
        <h1>Student List</h1>
      {showButton && (
        <button onClick={handleShowStudents}>Show Students</button>
      )}

      {!showButton && (
        <div>
          {students.map((student) => (
            <StudentCard
              key={student.id}
              id={student.id}
              name={student.name}
              address={student.address}
              bloodGroup={student.bloodGroup}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentList;
