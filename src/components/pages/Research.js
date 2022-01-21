import {HomeButton, Subtitle, Title} from "../StyledComponents";
import {Link} from "react-router-dom";
import Clouds from "../../assets/images/lucht.svg";

const Research = () => {
  return (
    <div className="research" style={{backgroundImage: `url(${Clouds})`, backgroundSize: '100%', position: 'relative'}}>
      <Link to="/">
        <HomeButton>Terug</HomeButton>
      </Link>

      <div style={{width: '70%', margin: 'auto', paddingTop: 50}}>
        <Title>Drankverpakkingen</Title>
        <Subtitle>2017-2021</Subtitle>

        <div className="grid">
          <div className="graph"></div>
          <div className="graph"></div>
          <div className="graph"></div>
          <div className="graph"></div>
          <div className="graph"></div>
          <div className="graph"></div>
        </div>
      </div>
    </div>
  )
}

export default Research