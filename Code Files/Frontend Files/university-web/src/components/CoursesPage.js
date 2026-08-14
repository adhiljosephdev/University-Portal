import CourseCard from './CourseCard';
import RegistrationForm from './RegistrationForm';
import CourseList from './CourseList';
import SearchBar from './SearchBar';

function CoursesPage() {
  return (
    <div>
      {/* Courses Page */}
      <h2>Course List</h2>

      <CourseCard
        title="Data Structures"
        code="CS201"
        credits={4}
      />

      <CourseCard
        title="Database Systems"
        code="CS301"
        credits={3}
      />
 
      <CourseCard
        title="Machine Learning"
        code="CS401"
        credits={5}
      />

      {/* Forms Section */}
      <h2>Student Registration</h2>
      <RegistrationForm />

      <h2>All Courses (Dynamic List)</h2>
      <CourseList />

      <h2>Search Courses</h2>
      <SearchBar />
    </div>
  );
}

export default CoursesPage;