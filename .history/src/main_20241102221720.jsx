import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import ListarProdutos from './pages/ListarProdutos'


import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <h1>Bem-vindo à Home</h1>
            <Link to="/produtos">Ver Produtos</Link>
        </div>
    );
}

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
