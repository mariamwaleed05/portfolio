import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import SideMenu from '../common/SideMenu';
import ToggleButtons from './../components/ToggleButtons';
import BackToTop from '../components/BackToTop';
import TextMeButton from '../components/TextMeButton';
import Footer from '../common/Footer';
import Title from '../common/Title';
import PreLoader from './../common/PreLoader';

const GraphicDesign = () => {
    return (
        <>
        <Helmet><title>Graphic Design</title>
             <link rel="icon" type="image/png" href="/icon.png" sizes="16x16" />    
        </Helmet>
        <PreLoader/>
         <SideMenu/>
        <ToggleButtons/>

<div className='main-wrapper'>
        <Title title="Graphic Design" className="maintitle" />


        
</div>
        <Footer/>
        <BackToTop/>
        <TextMeButton/>
        </>
      );
}
 
export default GraphicDesign;