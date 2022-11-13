import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import "./style.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />}/>
      <Route index element={<Home />} />
      <Route path="/inventario" element={<Inventory />} />
      <Route path="/comprar" element={<Home />} />
      <Route path="/vender" element={<Home />} />
      <Route path="/compras" element={<Home />} />
      <Route path="/ventas" element={<Home />} />
      <Route path="*" element={<Home />} />
  </Routes>
</BrowserRouter>
)
