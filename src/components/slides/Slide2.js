import React from "react";
import {Subtitle, Title, Text} from "../StyledComponents";
import {Clouds} from "../visuals/Clouds";
import {Skyline} from "../visuals/Skyline";
import {Dirk} from "../visuals/Dirk";

const Slide2 = () => {
  const pageStyle = { width: `100vw`, height: `100vh`, position: 'relative' }

  return (
    <div style={pageStyle} className="main">
      <div style={{textAlign: 'center'}}>
        <Title>Zwerfinator</Title>
        <Subtitle>Dirk Groot</Subtitle>

      </div>
      <div style={{display: 'flex', width: '100%', justifyContent: 'flex-end', marginTop: 50}}>
        <Text style={{width: '35%', paddingRight: 50, lineHeight: .95}}>
          <ul>
            <li>Deelt veel op social media</li><br/>
            <li>Scrijft columns</li><br/>
            <li>Geeft lezingen en gastlessen</li><br/>
            <li>Is gespecialiseerd in zwerfafval-onderzoek en -analyse en adviseert op basis van zijn onderzoeken</li>
          </ul>
        </Text>
      </div>

      <Clouds/>
      <Skyline/>
      <Dirk/>
    </div>
  )
}


export default Slide2