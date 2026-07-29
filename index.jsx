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
import HostVans from "./Pages/Host/HostVans"
import VanDetail from "./Pages/Host/VanDetail"
import HostVanInfo from "./Pages/Host/HostVanInfo"
import HostVanPhotos from "./Pages/Host/HostVanPhotos"
import HostVanPricing from "./Pages/Host/HostVanPricing"
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
            <Route path="vans" element={<HostVans />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans/:id" element={<VanDetail />}>
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
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
