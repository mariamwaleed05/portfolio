import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import SideMenu from '../common/SideMenu';
import ToggleButtons from './../components/ToggleButtons';
import BackToTop from '../components/BackToTop';
import TextMeButton from '../components/TextMeButton';
import Footer from '../common/Footer';
import Title from '../common/Title';
import PreLoader from './../common/PreLoader';

const Portfolio = () => {
    return ( 
        <>
        <Helmet><title>Build Your Portfolio</title></Helmet>
        <PreLoader/>
        <SideMenu/>
        <ToggleButtons/>

<div className='main-wrapper'>
        <Title title="Portfolio" className="maintitle" />
</div>

        <Footer/>
        <BackToTop/>
        <TextMeButton/>
        </>
     );
}
 
export default Portfolio;