import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="max-w-screen-xl mx-auto flex justify-between fixed">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
