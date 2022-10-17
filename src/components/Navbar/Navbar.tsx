import React, { ReactNode } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/apostas">Apostas</Link>
          </li>
          <li>
            <Link to="/jogos">Jogos</Link>
          </li>
          <li>
            <Link to="/grupos">Grupos</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
