import React from "react"
import {Parallax} from "react-scroll-parallax";
import {ReactComponent as DirkIcon} from "./assets/images/Dirk.svg";
import Clouds from "./assets/images/Lucht.svg";
import {Subtitle, Title} from "./components/StyledComponents";


const App = () => {
  // const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches

  return (
    <div className="App" style={{backgroundImage: `url(${Clouds})`, backgroundSize: '100%'}}>
      <div style={{width: 250, margin: 'auto'}}>
        <Title>Zwerfinator</Title>
        <Subtitle>Dirk Groot</Subtitle>
      </div>
      <DirkIcon width={400} style={{position: 'absolute', bottom: 0, left: 300, zIndex: 1}}/>
    </div>
  )
}

export default App
