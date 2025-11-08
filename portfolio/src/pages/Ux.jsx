import React, { Component } from 'react';
import SideMenu from '../common/SideMenu';
import ToggleButtons from './../components/ToggleButtons';
import BackToTop from '../components/BackToTop';
import TextMeButton from '../components/TextMeButton';
import Footer from '../common/Footer';
import Title from '../common/Title';
import PreLoader from './../common/PreLoader';

const Ux = () => {
    return ( 
        <>
        <PreLoader/>
        <SideMenu/>
        <ToggleButtons/>

<div className='main-wrapper'>
        <Title title="ux/ui" className="maintitle" />
</div>
        <Footer/>
        <BackToTop/>
        <TextMeButton/>
        </>
     );
}
 
export default Ux;