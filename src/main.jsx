import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './Component/Nav.jsx'
import Gioithieu from './Component/Gioithieu.jsx'
import Footer from './Component/Footer.jsx'
import Tintuc from './Component/Tintuc.jsx'
import Sanpham from './Component/Sanpham.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='App' element={<App />} />
        <Route path='Nav' element={<Nav />} />
        <Route path='Gioithieu' element={<Gioithieu />} />
        <Route path='Tintuc' element={<Tintuc />} />
        <Route path='Tintuc' element={<Tintuc />} />
        <Route path='Sanpham' element={<Sanpham />} />
        <Route path='Footer' element={<Footer />} />






      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
