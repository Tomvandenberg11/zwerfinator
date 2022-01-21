import Clouds from "../../assets/images/lucht.svg";
import {Subtitle, Title, Underline} from "../StyledComponents";
import {Link} from "react-router-dom";
import {ReactComponent as DirkIcon} from "../../assets/images/dirk.svg";
import {Skyline} from "../visuals/skyline";

const Home = () => {
  return (
    <div className="App" style={{backgroundImage: `url(${Clouds})`, backgroundSize: '100%'}}>

      <div style={{width: '50%', margin: 'auto', marginTop: 100}}>
        <Title>Zwerfinator</Title>
        <Subtitle>Dirk Groot</Subtitle>

        <div style={{marginTop: 200, display: 'flex', justifyContent: 'space-between', width: 450, zIndex: 2}}>
          <Link style={{zIndex: 10, textDecoration: 'none'}} to="/about">
            <Subtitle style={{width: 200, color: 'black'}}>Wie is de zwerfinator?</Subtitle>
            <Underline style={{marginTop: 20}}/>
          </Link>
          <Link style={{zIndex: 10, textDecoration: 'none'}} to="/research">
            <Subtitle style={{width: 200, color: 'black'}}>Onderzoek plastic flesjes</Subtitle>
            <Underline style={{marginTop: 20}}/>
          </Link>
        </div>
      </div>

      <DirkIcon width={400} style={{position: 'absolute', bottom: 0, right: 300, zIndex: 1}}/>
      <Skyline/>

    </div>
  )
}

export default Home