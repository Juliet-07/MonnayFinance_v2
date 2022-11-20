import { Route, Routes } from "react-router-dom";
import About from "./pages/about";
import LandingPage from "./pages/landingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/aboutus" element={<About />} />
    </Routes>
  );
}

export default App;
