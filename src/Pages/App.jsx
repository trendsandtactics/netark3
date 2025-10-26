import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Solutions from "./pages/Solutions";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      {/* Navigation Bar */}
      <Nav />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/contact" element={<Contact />} />

        {/* Catch-all route for invalid URLs */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

// Simple 404 fallback component
function NotFound() {
  return (
    <div
      style={{
        backgroundColor: "#0e0f2c",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2rem", color: "#A1162A" }}>404 - Page Not Found</h1>
      <p style={{ marginTop: "10px", color: "#ccc" }}>
        The page you’re looking for doesn’t exist.
      </p>
    </div>
  );
}

export default App;
