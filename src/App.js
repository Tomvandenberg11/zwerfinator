import React from "react"
import {Subtitle, Text, Title} from "./components/StyledComponents";
import FadeText from "./components/FadeText";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import {Parallax} from "react-scroll-parallax";

// importing images
import {ReactComponent as Quote} from "./assets/images/quotationMark.svg";
import {ReactComponent as Bottles} from "./assets/images/bottles.svg";
import {ReactComponent as Cans} from "./assets/images/cans.svg";
import {ReactComponent as AllPackages} from "./assets/images/allPackages.svg";
import Hover from "./assets/images/hover.png";

// importing icons
import {ReactComponent as DirkIcon} from "./assets/images/dirk.svg";
import {ReactComponent as FacebookIcon} from "./assets/images/socials/facebook.svg";
import {ReactComponent as InstaIcon} from "./assets/images/socials/insta.svg";
import {ReactComponent as MailIcon} from "./assets/images/socials/mail.svg";
import {ReactComponent as PhoneIcon} from "./assets/images/socials/phone.svg";

// importing graphs
import {ReactComponent as GRAPH1} from "./assets/images/graphs/graph1.svg";
import {ReactComponent as GRAPH2_1} from "./assets/images/graphs/graph2_1.svg";
import {ReactComponent as GRAPH2_2} from "./assets/images/graphs/graph2_2.svg";
import {ReactComponent as GRAPH3_1} from "./assets/images/graphs/graph3_1.svg";
import {ReactComponent as GRAPH3_2} from "./assets/images/graphs/graph3_2.svg";
import {ReactComponent as GRAPH4_1} from "./assets/images/graphs/graph4_1.svg";
import {ReactComponent as GRAPH4_2} from "./assets/images/graphs/graph4_2.svg";
import {ReactComponent as GRAPH5_1} from "./assets/images/graphs/graph5_1.svg";
import {ReactComponent as GRAPH5_2} from "./assets/images/graphs/graph5_2.svg";
import {ReactComponent as GRAPH6} from "./assets/images/graphs/graph6.svg";
import {ReactComponent as GRAPH7_1} from "./assets/images/graphs/graph7_1.svg";
import {ReactComponent as GRAPH7_2} from "./assets/images/graphs/graph7_2.svg";
import {ReactComponent as GRAPH8} from "./assets/images/graphs/graph8.svg";
import {ReactComponent as GRAPH8_2} from "./assets/images/graphs/graph8_2.svg";

const App = () => {
  // decide if screen is desktop
  const isMobile = window.matchMedia("only screen and (max-width: 1350px)").matches

  return (
    // showing other content when screen is not desktop
    isMobile ?
      <div style={{width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Text>Sorry, currently only for screens > 1350px</Text>
      </div>
      : <div className="App" style={{backgroundColor: 'whitesmoke'}}>
          <div className="container">
            <div className="text-wrapper">
                <div>
                  <Parallax x={[-140, 100]}>
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

          <div className="container" style={{backgroundColor: '#FAFAFA'}}>
            <div className="text-wrapper">
              <Text style={{color: '#FF8D00', fontSize: '5em'}}>19.515</Text>
              <Subtitle style={{textDecoration: 'underline'}}>Plastic flesjes </Subtitle>
              <Parallax x={[-100, 0]}>
                <Bottles width={8000} height={200} />
              </Parallax>
            </div>
          </div>

          <div className="container">
            <div className="text-wrapper">
              <div>
                <Text>Aantal opgeraapte flesjes per jaar, per kilometer</Text>
                <GRAPH1 width={'90%'}/>
              </div>
            </div>
          </div>

          <div className="container" style={{alignItems: 'flex-start', backgroundColor: '#FAFAFA'}}>
            <div className="text-wrapper hover">
              <img alt="Hover icon" src={Hover} width={50} height={50} style={{position: 'absolute', right: 0, top: 200}}/>
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

          <div className="container" style={{alignItems: 'flex-start'}}>
            <div className="text-wrapper hover">
              <img alt="Hover icon" src={Hover} width={50} height={50} style={{position: 'absolute', right: 0, top: 200}}/>
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

          <div className="container" style={{backgroundColor: '#FAFAFA'}}>
            <div className="text-wrapper">
              <Text style={{color: '#00ACE7', fontSize: '5em'}}>58.027</Text>
              <Subtitle style={{textDecoration: 'underline'}}>Blikjes</Subtitle>
              <Parallax x={[-100, 0]}>
                <Cans width={8000} height={200} />
              </Parallax>
            </div>
          </div>

          <div className="container" style={{alignItems: 'flex-start'}}>
            <div className="text-wrapper hover">
              <img alt="Hover icon" src={Hover} width={50} height={50} style={{position: 'absolute', right: 0, top: 200}}/>
              <div className="visible">
                <Text>Het aantal opgeraapte blikjes per jaar verschilt soms enorm. Het neemt ook steeds toe. Wat slecht is... </Text>
                <GRAPH4_1 width={'100%'}/>
              </div>
              <div className="invisible">
                <Text>Het aantal opgeraapte blikjes per jaar verschilt soms enorm. Het neemt ook steeds toe. Wat slecht is... </Text>
                <GRAPH4_2 width={'100%'}/>
                <Text style={{marginTop: -50, fontWeight: 400, textAlign: 'center'}}>Maar het aantal opgeraapte blikjes per kilometer verschilt nauwelijks  </Text>
              </div>
            </div>
          </div>

          <div className="container" style={{alignItems: 'flex-start', backgroundColor: '#FAFAFA'}}>
            <div className="text-wrapper hover">
              <img alt="Hover icon" src={Hover} width={50} height={50} style={{position: 'absolute', right: 0, top: 200}}/>
              <div className="visible">
                <Text>In de laatste twee jaar zijn gevonden blikjes flink toegenomen</Text>
                <GRAPH5_1 width={'80%'}/>
              </div>
              <div className="invisible">
                <Text>Maar de verhouding neemt lichtelijk toe</Text>
                <GRAPH5_2 width={'80%'}/>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="text-wrapper">
              <Title style={{color: '#00ACE7', fontSize: '5em'}}>8<span style={{color: '#FF8D00'}}>8</span>.<span style={{color: 'darkgray'}}>8</span><span style={{color: '#FF8D00'}}>8</span>8</Title>
              <Subtitle style={{textDecoration: 'underline', fontSize: '8em', marginBottom: 50}}>Alle drankverpakkingen</Subtitle>
              <Parallax x={[-100, 0]}>
                <AllPackages width={8000} height={200} />
              </Parallax>
            </div>
          </div>

          <div className="container" style={{alignItems: 'flex-start', backgroundColor: '#FAFAFA'}}>
            <div className="text-wrapper">
              <div style={{paddingTop: 100}}>
                <Text>Totaal opgeraapte drankverpakkingen per half jaar</Text>
                <GRAPH6 width={'80%'}/>
              </div>
            </div>
          </div>

          <div className="container" style={{alignItems: 'flex-start'}}>
            <div className="text-wrapper hover">
              <img alt="Hover icon" src={Hover} width={50} height={50} style={{position: 'absolute', right: 0, top: 200}}/>
              <div className="visible" style={{display: 'flex', justifyContent: 'center'}}>
                <GRAPH7_1 width={'80%'}/>
              </div>
              <div className="invisible" style={{display: 'flex', justifyContent: 'center'}}>
                <GRAPH7_2 width={'80%'}/>
              </div>
            </div>
          </div>

          <div className="container" style={{alignItems: 'flex-start', backgroundColor: '#FAFAFA'}}>
            <div className="text-wrapper hover">
              <img alt="Hover icon" src={Hover} width={50} height={50} style={{position: 'absolute', right: 0, top: 200}}/>
              <div className="visible" style={{display: 'flex', alignItems: 'center', flexDirection: 'column', top: 50}}>
                <Text style={{fontSize: '4em'}}>2021</Text>
                <GRAPH8 width={'80%'}/>
              </div>
              <div className="invisible" style={{display: 'flex', alignItems: 'center', flexDirection: 'column', top: 50}}>
                <Text style={{fontSize: '4em'}}>2021</Text>
                <GRAPH8_2 width={'80%'}/>
                <Text style={{marginTop: -100, fontWeight: 400, textAlign: 'center'}}>Sinds het statiegeld op plastic flesjes zijn de plastic flesjes in de natuur afgenomen, maar de blikjes nemen steeds meer toe.</Text>
                <Text style={{fontWeight: 700, textAlign: 'center'}}>Is statiegeld de oorzaak van het toenemen van de blikjes in het zwerfafval?</Text>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="text-wrapper">
              <Title style={{fontSize: '6em'}}>Nieuwsgierig geworden naar Dirk z'n werk?</Title>
            </div>
          </div>

          <div className="container" style={{alignItems: 'flex-start', height: '190vh', position: 'relative'}}>
            <div className="text-wrapper" style={{paddingTop: 100}}>
              <DirkIcon style={{position: 'absolute', bottom: 0, zIndex: 1}}/>
              <div style={{marginTop: 500, zIndex: 3, position: 'relative'}}>
                <Text style={{fontWeight: 400, marginBottom: 0}}>Ondek meer op<br/><a href="http://www.zwerfinator.nl" target="_blank" rel="noreferrer" style={{color: '#000', fontWeight: '700'}}>Zwerfinator.nl</a></Text>
                <a href="https://www.facebook.com/zwerfinator/" target="_blank" rel="noreferrer"><FacebookIcon width={50} style={{marginRight: 50}}/></a>
                <a href="https://www.instagram.com/zwerfinator/" target="_blank" rel="noreferrer"><InstaIcon width={50}/></a>

                <div style={{marginTop: 200}}>
                  <Text>Of neem contact op</Text>
                  <div style={{display: 'flex', alignItems: 'center'}}><PhoneIcon width={30}/><Text style={{marginBottom: 0, marginLeft: 30}}><a style={{textDecoration: 'none', color: '#000'}} href="tel:0031681503456">+31 681503456</a></Text></div>
                  <div style={{display: 'flex', alignItems: 'center'}}><MailIcon width={30}/><Text style={{marginBottom: 0, marginLeft: 30}}><a style={{textDecoration: 'none', color: '#000'}} href="mailto:info@zwerfinator.nl">info@zwerfinator.nl</a></Text></div>
                </div>
              </div>
            </div>
          </div>

        </div>
  )
}

export default App
