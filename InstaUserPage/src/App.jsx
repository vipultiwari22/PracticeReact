import { useState } from "react";
import "./App.css";
import Login from "./Component/Login";
import Register from "./Component/Register";

function App() {
  const [showLogin, setshowLogin] = useState("");
  return <>{showLogin ? <Login /> : <Register />}</>;
}

export default App;
