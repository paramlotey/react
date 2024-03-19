import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from "./Components/Card";
import Card2 from "./Components/Card2";
import Practice from "./Components/Practice";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Error from "./Components/Error";
import Adminlogin from "./Components/Adminlogin";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />}></Route>
        {/* <Route path="/card" element={<Card />}></Route>
        <Route path="/card2" element={<Card2 />}></Route>
        <Route path="/practice" element={<Practice />}></Route> */}

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />}></Route>

        <Route path="/admin">
          <Route path="login" element={<Adminlogin />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
