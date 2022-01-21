import React from "react"
import { Route, Routes} from "react-router-dom";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Research from "./components/pages/Research";


const App = () => {
  // const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/research" element={<Research/>}/>
    </Routes>
  )
}

export default App
