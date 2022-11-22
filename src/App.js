import { Route, Routes } from "react-router-dom";
import About from "./pages/about";
import LandingPage from "./pages/landingPage";
import Login from "./pages/login";
import Signup from "./pages/signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Login />} />
    </Routes>
  );
}

export default App;
