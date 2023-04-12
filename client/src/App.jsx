import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from "./components/Student";
import CreatePage from "./components/CreatePage";
import UdpatePage from "./components/UdpatePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Student />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/update/:id" element={<UdpatePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
