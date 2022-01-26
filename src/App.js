import React, {useState} from "react"
import {Subtitle, Text, Title} from "./components/StyledComponents";
import FadeText from "./components/FadeText";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import {Parallax} from "react-scroll-parallax";

import {ReactComponent as Quote} from "./assets/images/quotationMark.svg";
import {ReactComponent as Bottles} from "./assets/images/bottles.svg";
import {ReactComponent as Cans} from "./assets/images/cans.svg";
import {ReactComponent as AllPackages} from "./assets/images/allPackages.svg";

import {ReactComponent as GRAPH1} from "./assets/images/graphs/graph1.svg";
import {ReactComponent as GRAPH2_1} from "./assets/images/graphs/graph2_1.svg";
import {ReactComponent as GRAPH2_2} from "./assets/images/graphs/graph2_2.svg";
import {ReactComponent as GRAPH3_1} from "./assets/images/graphs/graph3_1.svg";
import {ReactComponent as GRAPH3_2} from "./assets/images/graphs/graph3_2.svg";
import {ReactComponent as GRAPH4_1} from "./assets/images/graphs/graph4_1.svg";
import {ReactComponent as GRAPH4_2} from "./assets/images/graphs/graph4_2.svg";
import {ReactComponent as GRAPH5_1} from "./assets/images/graphs/graph5_1.svg";
import {ReactComponent as GRAPH5_2} from "./assets/images/graphs/graph5_2.svg";

const App = () => {
  // const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches
  const [statePercent, setStatePercent] = useState(true)
  const [statePlastic, setStatePlastic] = useState(true)

  return (
    <div className="App" style={{backgroundColor: 'whitesmoke'}}>
      <div className="container">
        <div className="text-wrapper">
            <div>
              <Parallax x={[-143, 100]}>
                <Title style={{color: '#00ACE7'}}>Dirk Groot</Title>
              </Parallax>
              <Subtitle>Zwerfinator</Subtitle>
            </div>
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
            <GRAPH1 width={'90%'}/>
          </div>
        </div>
      </div>

      <div className="container" style={{alignItems: 'flex-start'}}>
        <div className="text-wrapper hover">
          <div className="visible">
            <Text>We zien enorme afname van het aantal plastic flesjes van 2020 naar 2021</Text>
            <GRAPH2_1 width={'70%'}/>
          </div>
          <div className="invisible">
            <Text>Dat zien we nog duidelijker bij de verhoudingen</Text>
            <GRAPH2_2 width={'70%'}/>
          </div>
        </div>
      </div>

      <div className="container" style={{alignItems: 'flex-start', backgroundColor: 'lightgray'}}>
        <div className="text-wrapper hover">
          <div className="visible">
            <Text>Als we naar de verhoudingen kijken per half jaar</Text>
            <GRAPH3_1 width={'100%'}/>
          </div>
          <div className="invisible">
            <Text>Zien we dat statiegeld z'n werk doet</Text>
            <GRAPH3_2 width={'100%'}/>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="text-wrapper">
          <Subtitle style={{textDecoration: 'underline'}}>Blikjes</Subtitle>
          <Parallax x={[-100, 0]}>
            <Cans width={8000} height={200} />
          </Parallax>
        </div>
      </div>

      <div className="container" style={{alignItems: 'flex-start', backgroundColor: 'lightgray'}}>
        <div className="text-wrapper hover">
          <div className="visible">
            <Text>Het aantal opgeraapte blikjes per jaar verschilt soms enorm. Het neemt ook steeds toe. Wat slecht is... </Text>
            <GRAPH4_1 width={'100%'}/>
          </div>
          <div className="invisible">
            <Text>Het aantal opgeraapte blikjes per jaar verschilt soms enorm. Het neemt ook steeds toe. Wat slecht is... </Text>
            <GRAPH4_2 width={'100%'}/>
          </div>
        </div>
      </div>

      <div className="container" style={{alignItems: 'flex-start'}}>
        <div className="text-wrapper hover">
          <div className="visible">
            <Text>In het vierde kwartaal van 2020 en 2021 zijn er veel meer blikjes opgeraapt</Text>
            <GRAPH5_1 width={'80%'}/>
          </div>
          <div className="invisible">
            <Text>De verhouding van blikjes per kilometer neemt zelfs een beetje toe</Text>
            <GRAPH5_2 width={'80%'}/>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="text-wrapper">
          <Subtitle style={{textDecoration: 'underline', fontSize: '8em', marginBottom: 50}}>Alle drankverpakkingen</Subtitle>
          <Parallax x={[-100, 0]}>
            <AllPackages width={8000} height={200} />
          </Parallax>
        </div>
      </div>

    </div>
  )
}

export default App
