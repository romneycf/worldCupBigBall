import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./containers/Layout";
import Home from "./containers/Home/Home";
import NoPage from "./containers/NoPage/NoPage";
import Login from "./containers/Login/Login";
import Apostas from "./containers/Apostas/Apostas";
import Jogos from "./containers/Jogos/Jogos";
import Grupos from "./containers/Grupos/Grupos";
import Contato from "./containers/Contato/Contato";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="apostas" element={<Apostas />} />
          <Route path="jogos" element={<Jogos />} />
          <Route path="grupos" element={<Grupos />} />
          <Route path="contato" element={<Contato />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
