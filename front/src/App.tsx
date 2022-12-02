import React from 'react'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CadastroCliente from './components/cliente/cadastro_cliente/cadastro_cliente';
import ListaCliente from './components/cliente/lista_cliente/lista_cliente';
import CadastroPedido from './components/pedido/cadastro_pedido/cadastro_pedido';
import ListaPedido from './components/pedido/lista_pedido/lista_pedido';
import CadastroProduto from './components/produto/cadastro_produto/cadastro_produto';
import ListaProduto from './components/produto/lista_produto/lista_produtos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CadastroCliente />} />
        <Route path="/cadastro_cliente" element={<CadastroCliente />} />
        <Route path="/Lista_cliente" element={<ListaCliente />} />
        <Route path="/cadastro_pedido" element={<CadastroPedido />} />
        <Route path="/lista_pedido" element={<ListaPedido />} />
        <Route path="/cadastro_produto" element={<CadastroProduto />} />
        <Route path='/lista_produto' element={<ListaProduto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
