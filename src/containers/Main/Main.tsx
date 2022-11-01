import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./Main.module.css";
import Home from "../Home/Home";
import Navbar from "../../components/Navbar/Navbar";
import Apostas from "../Apostas/Apostas";
import Contato from "../Contato/Contato";
import Grupos from "../Grupos/Grupos";
import Jogos from "../Jogos/Jogos";
import NoPage from "../NoPage/NoPage";

export default function Main() {
  return (
    <div className={styles.Main}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="apostas" element={<Apostas />} />
          <Route path="jogos" element={<Jogos />} />
          <Route path="grupos" element={<Grupos />} />
          <Route path="contato" element={<Contato />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
