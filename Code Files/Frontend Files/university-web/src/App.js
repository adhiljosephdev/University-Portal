import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import CourseDetails from './components/CourseDetails';
import StudentsPage from './components/StudentsPage';
import CoursesPage from './components/CoursesPage';
import Login from './components/Login';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="p-4">

      {/* Navigation */}
      <Navbar />

      <Routes>
         {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />

        {/* Students Page */}
        <Route path="/students" element={<StudentsPage />} />

        {/* Courses Page */}
        <Route path="/courses" element={<CoursesPage />} />

        {/* Course Details Page */}
        <Route path="/courses/:id" element={<CourseDetails />} />

        {/* About Page */}
        <Route path="/about" element={<About />} />

      </Routes>

    </div>
  );
}

export default App;