// Header.js
import React from "react";
import logo from "../logo01.png"; // Importando o logo
import "../styles.css";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo UPBMS" className="logo" />
      <nav>
        <ul>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#services">Serviços</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
