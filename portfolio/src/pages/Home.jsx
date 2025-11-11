import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import './Home.css';

import SideMenu from '../common/SideMenu';
import LogosTrack from '../components/LogosTrack';
import BackToTop from '../components/BackToTop';
import TextMeButton from '../components/TextMeButton';
import HeroSection from '../components/HeroSection';
import ToggleButtons from '../components/ToggleButtons';
import Button from '../common/Button';
import WhoAmI from '../components/WhoAmI';
import Title from '../common/Title';
import SubTitle from '../common/SubTitle';
import InquiryForm from './../components/InquiryForm';
import SoftwareBasket from '../components/SoftwaresBasket';
import Footer from './../common/Footer';
import PreLoader from './../common/PreLoader';
import HangingCards from '../components/HangingCards';
import ServicesSection from '../components/ServicesSection';


const Home = () => {
          
    return ( 
<>
       <Helmet><title>Mariam's Portfolio</title></Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@200..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/sf-pro-display" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/sloop" rel="stylesheet" />
   
<PreLoader/>
<SideMenu/>
     <div className="main-wrapper">
<ToggleButtons/>
<HeroSection/>
<Link to="/Contact"><Button title="Let's get in touch" className="herobutton" /></Link>
<LogosTrack/>
<WhoAmI/>

<Title  title="Services" className="maintitle" />
<div class="flex up">
<SubTitle  subtitle="UX/UI Designer & Graphic Designer." className="ssub" />
<Link to="/Services"><h2 class="seeall">See All</h2></Link>
</div>


<Title  title="From idea to bloom" className="maintitle" />
<SubTitle  subtitle="My Process / How Do I Work as a Designer?" className="ssub" />
<HangingCards/>



<Title  title="Software i use" className="maintitle" />
<div class="flex up">
<SubTitle  subtitle="as a UX/UI Designer" className="ssub" />
</div>
<SoftwareBasket/>


<BackToTop/>
<TextMeButton/> 

</div>

<Footer/>
</>
     );
}
 
export default Home;