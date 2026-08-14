import { Link } from 'react-router-dom';

function CourseList() {
  const courses = [
    { id: 101, title: "Python Basics", credits: 3 },
    { id: 102, title: "Django Core", credits: 4 },
    { id: 103, title: "React Frontend", credits: 4 }
  ];

  return (
    <ul>
      {courses.map(course => (
        <li key={course.id}>
          <Link to={`/courses/${course.id}`}>
            <b>{course.title}</b>
          </Link>{" "}
          - {course.credits} Credits
        </li>
      ))}
    </ul>
  );
}

export default CourseList;