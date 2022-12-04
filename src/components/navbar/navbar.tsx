import React, { useState } from "react";
import "./style.css";


export const NavBar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
      <>
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-logo">
              <a href='/'><p>Projetin</p></a>
            </div>
          
            <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
               <a href='/cadastro_cliente'><p>Cadastro Cliente</p></a>
              </li>
              <li className="nav-item">
               <a href='/lista_cliente'><p>Lista Cliente</p></a>
              </li>
              <li className="nav-item">
               <a href='/cadastro_pedido'><p>Cadastro Pedido</p></a>
              </li>
              <li className="nav-item">
               <a href='/lista_pedido'><p>Lista Pedido</p></a>
              </li>
              <li className="nav-item">
               <a href='/cadastro_produto'><p>Cadastro Produto</p></a>
              </li>
              <li className="nav-item">
               <a href='/lista_produto'><p>Lista Produto</p></a>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
          </div>
        </nav>
      </>
  )
}
