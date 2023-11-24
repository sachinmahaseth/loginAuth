import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './component/Login.js';
import Register from "./component/Register.js";
// import Layout from "./component/layout.js";
import Pagenotfound from "./component/PageNotFound.js";
import Home from "./component/Home.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} ></Route>
          <Route path="/register" element={<Register />} ></Route>
          <Route path="*" element={<Pagenotfound />} ></Route>
          <Route path="/home" element={<Home />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;
