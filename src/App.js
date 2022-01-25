import React, {useState} from "react"
import {Subtitle, Text, Title} from "./components/StyledComponents";
import FadeText from "./components/FadeText";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import {Parallax} from "react-scroll-parallax";

import {ReactComponent as Quote} from "./assets/images/quotationMark.svg";
import {ReactComponent as Bottles} from "./assets/images/bottles.svg";
import {ReactComponent as GRAPH1} from "./assets/images/graphs/graph1.svg";
import {ReactComponent as GRAPH2_1} from "./assets/images/graphs/graph2_1.svg";
import {ReactComponent as GRAPH2_2} from "./assets/images/graphs/graph2_2.svg";

const App = () => {
  // const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches
  const [statePercent, setStatePercent] = useState(true)
  const [statePlastic, setStatePlastic] = useState(true)

  return (
    <div className="App" style={{backgroundColor: 'whitesmoke'}}>
      <div className="container">
        <div className="text-wrapper">
          <FadeText>
              <div>
                <Parallax x={[-143, 100]}>
                  <Title style={{color: '#00ACE7'}}>Dirk Groot</Title>
                </Parallax>
                <Subtitle>Zwerfinator</Subtitle>
              </div>
          </FadeText>
        </div>
      </div>

      <div className="container">
        <div className="text-wrapper">
          <FadeText>
            <div>
              <Subtitle>Raapt actief</Subtitle>
              <Parallax x={[100, -100]}>
                <Title style={{color: '#00ACE7'}}>Zwerfafval</Title>
              </Parallax>
            </div>
          </FadeText>
        </div>
      </div>


      <div className="container">
        <div className="text-wrapper">
          <div>
            <Subtitle>Met als</Subtitle>
            <Title style={{color: '#00ACE7'}}>missie</Title>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="text-wrapper">
          <FadeText>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <Subtitle style={{color: '#00ACE7'}}>Zwerfafval voorkomen bij de bron</Subtitle>
              <Quote style={{alignSelf: 'center'}}/>
            </div>
          </FadeText>
        </div>
      </div>

      <div className="container">
        <div className="text-wrapper">
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Parallax y={[10, -10]}>
              <Title style={{color: '#00ACE7'}}>100</Title>
              <Subtitle style={{fontSize: '8em'}}>dagen</Subtitle>
            </Parallax>
            <Parallax y={[-10, 20]}>
              <Title style={{color: '#00ACE7'}}>200</Title>
              <Subtitle style={{fontSize: '8em'}}>stuks afval</Subtitle>
            </Parallax>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="text-wrapper">
          <FadeText>
            <Subtitle>Wat blijkt?</Subtitle>
          </FadeText>
        </div>
      </div>

      <div className="container">
        <div className="text-wrapper">
          <FadeText>
            <div>
              <Title style={{color: '#00ACE7'}}>
                <CountUp end={50} redraw={false} duration={1.5}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} minTopValue={100}>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>%
              </Title>
              <Subtitle style={{fontSize: '8em'}}>drankverpakkingen</Subtitle>
            </div>
          </FadeText>
        </div>
      </div>

      <div className="container">
        <div className="text-wrapper">
          <FadeText>
            <Subtitle>En dat was nog maar één onderzoek...</Subtitle>
          </FadeText>
        </div>
      </div>

      <div className="container">
        <div className="text-wrapper">
          <FadeText>
            <div>
              <Subtitle style={{fontSize: '6em'}}>Dus onderzoekt hij nu</Subtitle>
              <Title style={{color: '#00ACE7', fontSize: '8em'}}>drankverpakkingen</Title>
              <Subtitle style={{fontSize: '6em'}}>door heel Nederland</Subtitle>
            </div>
          </FadeText>
        </div>
      </div>

      <div className="container">
        <div className="text-wrapper">
          <FadeText>
            <Subtitle>Met als resultaat</Subtitle>
          </FadeText>
        </div>
      </div>

      <div className="container">
        <div className="text-wrapper">
          <FadeText>
            <div>
              <Title style={{color: '#00ACE7'}}>
                <CountUp end={88888} redraw={false} duration={5}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start}>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </Title>
              <Subtitle style={{fontSize: '8em'}}>drankverpakkingen</Subtitle>
            </div>
          </FadeText>
        </div>
      </div>

      <div className="container">
        <div className="text-wrapper">
          <FadeText>
            <div>
              <Title style={{color: '#00ACE7'}}>2512,5</Title>
              <Subtitle>kilometer.</Subtitle>
            </div>
          </FadeText>
        </div>
      </div>

      <div className="container">
        <div className="text-wrapper">
          <Subtitle style={{textDecoration: 'underline'}}>Plastic flesjes </Subtitle>
          <Parallax x={[-100, 0]}>
            <Bottles width={8000} height={200} />
          </Parallax>
        </div>
      </div>

      <div className="container" style={{backgroundColor: 'lightgray'}}>
        <div className="text-wrapper">
          <div>
            <Text>Aantal opgeraapte flesjes per jaar, per kilometer</Text>
            <GRAPH1/>
          </div>
        </div>
      </div>

      <div className="container" style={{alignItems: 'flex-start'}}>
        <div className="text-wrapper hover">
          <div className="visible">
            <Text>We zien enorme afname van het aantal plastic flesjes van 2020 naar 2021</Text>
            <GRAPH2_1 width={'80%'}/>
          </div>
          <div className="invisible">
            <Text>Dat zien we nog duidelijker bij de verhoudingen</Text>
            <GRAPH2_2 width={'80%'}/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
