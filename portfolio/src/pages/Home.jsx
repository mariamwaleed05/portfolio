import React, { Component } from 'react';
import './Home.css';
import SideMenu from '../common/SideMenu';
import LogosTrack from '../components/LogosTrack';
import BackToTop from '../components/BackToTop';
import TextMeButton from '../components/TextMeButton';
import HeroSection from '../components/HeroSection';
import ToggleButtons from '../components/ToggleButtons';
import Button from '../common/Button';
import WhoAmI from '../components/WhoAmI';


const Home = () => {
    return ( 
<>
       
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@200..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/sf-pro-display" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/sloop" rel="stylesheet" />
   

<SideMenu/>
     <div className="main-wrapper">
<ToggleButtons/>
<HeroSection/>
<Button title="Let’s get in touch" className="herobutton" />
<LogosTrack/>
<WhoAmI/>



<BackToTop/>
<TextMeButton/>
</div> 


</>
     );
}
 
export default Home;