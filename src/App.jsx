import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/hero";
import Header from "./components/header";
import AboutMe from "./components/aboutme";
import Experience from "./components/experience";
import Contacts from "./components/contacts";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default App;