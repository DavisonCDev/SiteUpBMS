import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/logo01.png';

const Header = () => (
  <header className={styles.header}>
    <img src={logo} alt="Logo UPBMS" className={styles.logo} />
    <nav>
      <ul className={styles.navLinks}>
        <li>Sobre</li>
        <li>Cases</li>
        <li>Serviços</li>
        <li>Contato</li>
      </ul>
    </nav>
  </header>
);

export default Header;
