import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Game from "./components/Game";

function App() {

   return(
    <>
    <Routes>
      <Route path="/" element={<Navigate to='home'/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/game" element={<Game/>}/>
    </Routes>
  
    </>
   )
}

export default App;
