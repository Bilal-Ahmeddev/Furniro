import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
 import LivingRoom from "./Pages/LivingRoom";
 import Bedroom from "./Pages/Bedroom";
 import Dining from "./Pages/Dining";
 import Office from "./Pages/Office";
import HomePage from './Pages/Homepage';
import Cart from "./Pages/Cart";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
           <Route path="/living-room" element={<LivingRoom />} />
          <Route path="/bedroom" element={<Bedroom />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/office" element={<Office />} /> 
          <Route path="/cart" element={<Cart />} /> 
        </Routes>
      </main>
    </Router>
  );
};

export default App;
