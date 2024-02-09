import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Cart from "./Components/Cart";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
