import React from "react";
import {Title, Subtitle, Text} from "../StyledComponents";
import {Clouds} from "../visuals/Clouds";
import {Skyline} from "../visuals/Skyline";
import {Dirk} from "../visuals/Dirk";

const Slide1 = () => {
  const pageStyle = { width: `100vw`, height: `100vh`, position: 'relative' }

  return (
    <div style={pageStyle} className="main">
      <div>
        <div style={{textAlign: 'center'}}>
          <Title>Zwerfinator</Title>
          <Subtitle>Dirk Groot</Subtitle>
        </div>

        <div style={{display: 'flex', width: '100%', justifyContent: 'flex-end', marginTop: 100}}>
          <Text style={{width: '35%', paddingRight: 50}}>De zwerfinator raapt actief zwerfafval en probeert daar zoveel mogelijk lol bij te maken. </Text>
        </div>
        <Clouds/>
        <Skyline/>
        <Dirk/>
      </div>
    </div>
  )
}


export default Slide1