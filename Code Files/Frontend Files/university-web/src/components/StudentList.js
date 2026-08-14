import React, { useState, useEffect } from 'react';

function StudentList() {

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    console.log("Component Mounted! Fetching data...");

    // Simulate a slow network request
    const timer = setTimeout(() => {

      const data = [
        { id: 1, name: "Alice", major: "CS" },
        { id: 2, name: "Bob", major: "Math" },
        { id: 3, name: "Charlie", major: "Physics" }
      ];

      setStudents(data);     // Update data
      setLoading(false);     // Stop loading spinner

    }, 2000); // Wait 2 seconds

    // Cleanup function (Optional but good practice)
    return () => clearTimeout(timer);

  }, []); // Empty array = Run once on load

  return (
    <div>
      <h2>Student List</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {students.map(s => (
            <li key={s.id}>
              {s.name} ({s.major})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StudentList;