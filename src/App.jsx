import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/hero";
import Header from "./components/header";
import AboutMe from "./components/aboutme";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </Router>
  );
}

export default App;