// App.js
import React, { useState } from "react";
import Login from "./Component/Login";
import Register from "./Component/Register";

function App() {
  const [showLogin, setShowLogin] = useState(true);

  const ShowLoginHandle = () => {
    setShowLogin(true);
  };

  const ShowRegisterHandle = () => {
    setShowLogin(false);
  };

  return (
    // Also We can use Router to make this things easy and much better
    // <Router>
    //   <Routes>
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/register" element={<Register />} />
    //     {/* Add more routes if needed */}
    //     <Route path="/" element={<Login />} /> {/* Default route */}
    //   </Routes>
    // </Router>
    <>
      {showLogin ? (
        <Login showRegister={ShowRegisterHandle} />
      ) : (
        <Register showRegister={ShowLoginHandle} />
      )}
    </>
  );
}

export default App;
