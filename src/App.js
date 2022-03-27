import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import TeamDetails from "./components/workspaces/TeamDetails";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Principal from "./pages/Principal";
import SignUp from "./pages/SignUp";
import WorkSpaces from "./pages/WorkSpaces";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<Principal />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/my_teams/:idTeam" element={<TeamDetails/>}/>
            <Route path="/workspaces" element={<WorkSpaces />} />{" "}
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
