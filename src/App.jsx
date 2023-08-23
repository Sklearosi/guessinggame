import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Game from "./components/Game";

function App() {

  const [options, setOptions] = useState({
    theme:'numbers',
    plNumber: 1,
    size: '4x4'
  })


   return(
    <>
    <Routes>
      <Route path="/" element={<Navigate to='home'/>}/>
      <Route path="/home"  element={<Home setOptions={setOptions} options={options} />}/>
      <Route path="/game" element={<Game options={options} />}/>
    </Routes>
  
    </>
   )
}

export default App;
