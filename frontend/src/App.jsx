import React from "react";
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import News from "./pages/News";
import Health from "./pages/Services/Health";
import Trips from "./pages/Services/Trips";
import Workshops from "./pages/Services/Workshops";
import Benefits from "./pages/Benefits";
import Join from "./pages/Join";
import Login from "./pages/Login";
import Administracion from "./pages/Administracion.";


function App() {
  const location = useLocation();
  const hideNavbarFooter = location.pathname === "/administracion";



  return (
    <div className="app">
     {!hideNavbarFooter && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/health" element={<Health />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/join" element={<Join />} />
        <Route path="/Login" element={<Login />} />
        <Route path="Administracion" element={<Administracion />} />
      </Routes>
      {!hideNavbarFooter && <Footer />}
    </div>
  );
}

export default App;
