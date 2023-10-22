import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Posting from "./pages/Posting";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/admin" element={<Admin />} />
          <Route path="/" index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posting" element={<Posting />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
