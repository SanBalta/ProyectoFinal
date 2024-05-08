import {BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./componentes/Login";
import Home from "./componentes/Home";

function App() {
  return (
    <BrowserRouter>
          <Routes>
        <Route exact  path="/" element={ <Login/>  }  />
        <Route exact path="Home" element={ <Home/> }   />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
