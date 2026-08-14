function UserGreeting(props) {

  const isLoggedIn = props.isLoggedIn;

  return (
    <div>

      {/* 1. Ternary Example */}
      <h1>
        {isLoggedIn ? "Welcome back, User!" : "Please Sign In"}
      </h1>

      {/* 2. Logical AND Example */}
      {/* This button ONLY renders if isLoggedIn is true */}
      {isLoggedIn && <button>Log Out</button>}

      {/* 3. Handling 'Else' cases for complex logic */}
      {!isLoggedIn && <button>Register Now</button>}

    </div>
  );
}

export default UserGreeting;