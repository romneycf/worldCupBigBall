import ReactDOM from "react-dom";
import { Routes, Route } from "react-router-dom";
import Apostas from "./containers/Apostas/Apostas";
import Contato from "./containers/Contato/Contato";
import Grupos from "./containers/Grupos/Grupos";
import Home from "./containers/Home/Home";
import Jogos from "./containers/Jogos/Jogos";
import Login from "./containers/Login/Login";
import NoPage from "./containers/NoPage/NoPage";
import AuthContextProvider from "./contexts/auth-context";

function App() {
  return (
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/apostas" element={<Apostas />} />
          <Route path="/jogos" element={<Jogos />} />
          <Route path="/grupos" element={<Grupos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </AuthContextProvider>
  );
}

export default App;
