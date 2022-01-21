import React from 'react'
import {HomeButton, Subtitle, Title, Text, StyledLink} from "../StyledComponents";
import {ReactComponent as DirkIcon} from "../../assets/images/dirk.svg";
import {ReactComponent as Trophy} from "../../assets/images/trophy.svg";
import {ReactComponent as Phone} from "../../assets/images/phone.svg";
import {ReactComponent as Mail} from "../../assets/images/mail.svg";
import {Skyline} from "../visuals/skyline";
import Clouds from "../../assets/images/lucht.svg";
import {Link} from "react-router-dom";
import {Parallax} from "react-scroll-parallax";

const About = () => (
  <div className="about" style={{backgroundImage: `url(${Clouds})`, backgroundSize: '100%', position: 'relative'}}>
    <Link to="/">
      <HomeButton>Terug</HomeButton>
    </Link>

    <div style={{width: '70%', margin: 'auto'}}>
      <Parallax  y={['-300px', '460px']} >
        <div style={{zIndex: 5}}>
          <Title>Zwerfinator</Title>
          <Subtitle>Dirk Groot</Subtitle><br/>
          <Text>De Zwerfinator raapt actief zwerfafval en probeert<br/>daarbij zo veel mogelijk lol te maken</Text><br/>
          <Text>Neem contact op met de Zwerfinator</Text><br/>
          <div style={{display: 'flex'}}>
            <StyledLink href="tel:0031681503456" style={{display: 'flex', alignItems: 'center', marginRight: 50}}><Phone width={20} style={{marginRight: 10}}/> 06-81503456</StyledLink>
            <StyledLink href="mailto: info@zwerfinator.nl" style={{display: 'flex', alignItems: 'center'}}><Mail width={20} style={{marginRight: 10}}/> info@zwerfinator.nl</StyledLink>
          </div>
        </div>
      </Parallax>

      <Parallax x={[20, 100]} y={['-200px', '200px']}>
        <div style={{display: 'inline-flex', alignItems: 'center'}}>
          <Trophy/>
          <div>
            <Text style={{marginLeft: 50, width: 300}}>Bedenker van #zwerfie-bingo en #zwerfie-Hold’em</Text><br/>
            <Text style={{marginLeft: 50, width: 300}}>Verkozen tot nummer 1 in de Duurzame 100 van Trouw in 2019</Text><br/>
            <Text style={{marginLeft: 50, width: 300}}>Waterlander van het jaar 2015</Text><br/>
            <Text style={{marginLeft: 50, width: 300}}>Ontving in 2016 een Groen Lintje van GroenLinks.</Text>
          </div>
        </div>
      </Parallax>

      <Parallax x={[150, 8]} y={['570px', '570px']}>
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
          <div className="dirkItem">
            <Text style={{width: 300}}>Gespecialiseerd in zwerfafval-onderzoek en -analyse en adviseert op basis van zijn onderzoeken </Text><br/>
          </div>
          <div className="dirkItem">
            <Text style={{width: 300}}>Schrijft columns</Text><br/>
          </div>
          <div className="dirkItem">
            <Text style={{width: 300}}>Geeft lezingen en gastlessen</Text><br/>
          </div>
          <div className="dirkItem">
            <Text style={{width: 300}}>Deelt veel op social media</Text><br/>
          </div>
        </div>
      </Parallax>
    </div>

    <DirkIcon width={450} style={{position: 'absolute', bottom: 0, right: 100, zIndex: 1}}/>
    <Skyline/>

  </div>
)

export default About