import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from "./Components/Layout"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Vans from "./Pages/Vans"
import VanDetails from "./Pages/VanDetails"

import "./server"

/* 
  Nested routes when they are used, you need to use 
  outlet( built-in placeholder component). 
  1. First need to wrap the routes with a parent route 
  <Rout element={<Layout/>}>
    <Route path"" element={]/>
    <Route path"" element={]/>
    <Route path"" element={]/>
  </Route>
  2. then in Layout need to import outlet from-react router-dom
    and import the components needed.
    ps: the component or outlet go as order(what you want to render the first)
*/

function App() {
  return (
    <BrowserRouter>
  <div className="app">
    <main>
      <Routes>
        <Route element={<Layout/>} >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetails />} />
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


