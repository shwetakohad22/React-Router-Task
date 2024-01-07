import React from "react";
import All from "./Components/All";
import { Routes, Route } from "react-router-dom";
import FullStack from "./Components/FullStack";
import DataScience from "./Components/DataScience";
import Navbar from "./Components/Navbar";
import Cyber from "./Components/Cyber";
import Career from "./Components/Career";
const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route Component={All} path="/" />
        <Route Component={FullStack} path="/fullstack" />
        <Route Component={DataScience} path="/datascience" />
        <Route Component={Cyber} path="/cyber-security" />
        <Route Component={Career} path="/carrer" />
      </Routes>
    </>
  );
};

export default App;
