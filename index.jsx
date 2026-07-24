import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from "./Components/NavBar"
import Footer from "./Components/Footer"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./Pages/About"
import Vans from "./Pages/Vans"


function App() {
  return (
    <BrowserRouter>
        <NavBar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/vans" element={<Vans/>}/>      
      </Routes>
      <Footer/>
      </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);


