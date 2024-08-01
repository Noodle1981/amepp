import React from "react";
import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import News from "./pages/News";
import Pharmacy from "./pages/Services/Pharmacy";
import Optics from "./pages/Services/Optics";
import Trips from "./pages/Services/Trips";
import Workshops from "./pages/Services/Workshops";
import Benefits from "./pages/Benefits";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/pharmacy" element={<Pharmacy />} />
        <Route path="/optics" element={<Optics />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
