import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/WelcomePage/Welcome";
import BookTracker from "./pages/inicio/inicio"; // Lista de libros
import AddBook from "./hooks/AddBook";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<BookTracker />} />
        <Route path="/books" element={<AddBook />} />
        <Route path="/books/:id" element={<AddBook />} />
      </Routes>
    </Router>
  );
}

export default App;




