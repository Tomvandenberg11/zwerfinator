import React, {useState} from "react"
import {Subtitle, Title} from "./components/StyledComponents";
import {ReactComponent as Quote} from "./assets/images/quotationMark.svg";
import FadeText from "./components/FadeText";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const App = () => {
  // const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches
  const [statePercent, setStatePercent] = useState(true)

  return (
    <div className="App" style={{backgroundColor: 'whitesmoke'}}>
      <div className="container">
        <div className="text-wrapper">
          <FadeText>
            <div>
              <Title style={{color: '#00ACE7'}}>Dirk Groot</Title>
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
              <Title style={{color: '#00ACE7'}}>Zwerfafval</Title>
            </div>
          </FadeText>
        </div>
      </div>


      <div className="container">
        <div className="text-wrapper">
          <FadeText>
            <div>
              <Subtitle>Met als</Subtitle>
              <Title style={{color: '#00ACE7'}}>Missie</Title>
            </div>
          </FadeText>
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
          <FadeText>
            <div>
              <Title style={{color: '#00ACE7'}}>100</Title>
              <Subtitle style={{fontSize: '8em'}}>dagen</Subtitle>
            </div>
            <div>
              <Title style={{color: '#00ACE7'}}>200</Title>
              <Subtitle style={{fontSize: '8em'}}>stuks afval</Subtitle>
            </div>
          </FadeText>
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
                <CountUp end={50} redraw={false} duration={1.5} onEnd= {() => {
                  setStatePercent(false);
                }} >>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor active={statePercent} onChange={start} delayedCall>
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
              <Title style={{color: '#00ACE7'}}>88.888</Title>
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
              <Subtitle>kilometer</Subtitle>
            </div>
          </FadeText>
        </div>
      </div>

    </div>
  )
}

export default App
