import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/WelcomePage/Welcome";
import Home from "./pages/inicio/inicio"
import BookForm from "./pages/inicio/books";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/books" element={<BookForm />} />
      </Routes>
    </Router>
  );
}

export default App;



