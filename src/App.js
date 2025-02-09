import React, { useState, useEffect } from "react";
import fire from './fire';
//import Login from './pages/Login';
//import Hero from './pages/Hero';
import "./App.css";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import LoginPage from "./pages/LoginPage";

function App() {
  
  return (
    <Router>
      <nav>
        <Link to="/"/> Home <Link/>
        <Link to="/create"/> Create <Link/>
        <Link to="/loginpage"/> Login <Link/>
      </nav>
      <Routes>
        <Route path= "/" element={<Home />} />
        <Route path= "/createpost" element={<CreatePost />} />
        <Route path= "/loginpage" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;
