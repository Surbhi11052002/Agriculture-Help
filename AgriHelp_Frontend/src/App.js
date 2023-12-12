import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Fertilizer from "./pages/fertilizer/fertilizer";
import Crop from "./pages/crop/crop";
import Disease from "./pages/disease/disease";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fertilizer" element={<Fertilizer />} />
          <Route path="/crop" element={<Crop />} />
          <Route path="/disease" element={<Disease />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
// code completed
export default App;
