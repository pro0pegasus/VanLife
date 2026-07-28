import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from "./Components/Layout"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Vans from "./Pages/Vans/Vans"
import VanDetails from "./Pages/Vans/VanDetails"
import Dashboard from "./Pages/Host/Dashboard"
import Income from "./Pages/Host/Income"
import Reviews from "./Pages/Host/Reviews"
import HostLayout from "./Components/HostLayout"


import "./server"


function App() {
  return (
    <BrowserRouter>
  <div className="app">
    <main>
      <Routes>
        <Route element={<Layout/>} >
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetails />} />
          
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </main>
  </div>
</BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
