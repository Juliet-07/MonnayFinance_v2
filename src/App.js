import { Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Dashboard from "./pages/dashboard";
import LandingPage from "./pages/landingPage";
import Login from "./pages/login";
import Signup from "./pages/signup";
import RegistrationSuccessful from "./pages/regSuccessful";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/regsuccessful" element={<RegistrationSuccessful />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
