import Gallary from "./Component/Gallary/Gallary";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ImageId from "./Component/ImageById/ImageId";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Gallary />} />
          <Route path="image/:id" element={<ImageId />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
