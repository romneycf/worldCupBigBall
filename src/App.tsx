import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./containers/Login/Login";
import Main from "./containers/Main/Main";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <Main />
    </div>
  );
}

export default App;
