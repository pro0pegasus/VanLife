import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from "./Components/NavBar"
import Footer from "./Components/Footer"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Vans from "./Pages/Vans"
import VanDetails from "./Pages/VanDetails"

import "./server"


function App() {
  return (
    <BrowserRouter>
  <div className="app">
    <NavBar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetails />} />
      </Routes>
    </main>
    <Footer />
  </div>
</BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);


