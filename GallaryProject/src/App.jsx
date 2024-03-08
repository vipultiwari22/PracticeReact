import { useState } from "react";
import "./App.css";
import Gallary from "./Component/Gallary/Gallary";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ImageId from "./Component/ImageById/ImageId";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Gallary />} />
          <Route path="/:id" element={<ImageId id={"123"} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
