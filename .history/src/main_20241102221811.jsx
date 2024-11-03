import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import ListarProdutos from './pages/ListarProdutos'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<ListarProdutos />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
