// const Home = () => 

// <div>THIS IS HOME!</div>;

// export default Home;


import React from "react";
import background from "../img/home-background-dark-60.jpg";
// import './Home.css'

function Home() {
  return (
    <div style={{ backgroundImage: `url(${background})`,height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat', }}>
    </div>
  );
}

export default Home;