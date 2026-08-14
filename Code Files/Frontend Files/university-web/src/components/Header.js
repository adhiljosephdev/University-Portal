import React from 'react';
// We will create this CSS file next- import './Header.css';

function Header() {
  return (
    <header className="app-header">
      <h1>University Hub Portal</h1>
      <nav>
        <a href="/">Home</a>{" "}
        <a href="/courses">Courses</a>
      </nav>
    </header>
  );
}

export default Header; // Allow other files to import this