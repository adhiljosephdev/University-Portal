import Header from './Header';
// import StudentCard from './StudentCard';
// import StudentList from './StudentList';
import Counter from './Counter';
import TitleUpdater from './TitleUpdater';
import Clock from './Clock';
import UserGreeting from './UserGreeting';
import LiveStudentList from './LiveStudentList';

function StudentsPage() {
  return (
    <div>

      {/* Login */}
      <UserGreeting isLoggedIn={true} />
      {/* <UserGreeting isLoggedIn={true} /> */}

      <Header />

      {/* <h2>Current Students</h2> */}

      {/* Reusing the same component with different data */}
      {/* <StudentCard
        name="Alice Wonderland"
        studentId="S001"
        major="Computer Science"
      /> */}

      {/* <StudentCard
        name="Bob Builder"
        studentId="S002"
        major="Civil Engineering"
      /> */}

      {/* <StudentCard
        name="Charlie Chocolate"
        studentId="S003"
        major="Culinary Arts"
      /> */}

      {/* <h2>Student Data (Api Stimulation)</h2> */}

      {/* API DATA */}
      <h2>Students (Live from Django)</h2>
      <LiveStudentList />

      {/* Extra Features */}
      <h2>Attendance Counter</h2>
      <Counter />

      <h2>Click Tracker</h2>
      <TitleUpdater />

      <h2>Live Clock</h2>
      <Clock />

    </div>
  );
}

export default StudentsPage;