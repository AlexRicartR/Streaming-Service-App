import React from "react";
import background from "../img/home-background-dark-60.jpg";
import LogoGeeksTv from "../img/geesktv.png";
import { Image } from 'primereact/image';

// import './Home.css'

function Home() {
  return (
    <div style={{ backgroundImage: `url(${background})`,height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat', }}>,
        <Image src="../img/geesktv.png" />
        <div style={{
              backgroundImage: `url(${LogoGeeksTv})`, height: '100vh',
              marginTop: '100px',
              fontSize: '50px',
              backgroundRepeat: 'no-repeat',
              alignContent: 'center'
          }}>,
          </div>
    </div>
  );
}

export default Home;