import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import SideMenu from '../common/SideMenu';
import ToggleButtons from './../components/ToggleButtons';
import BackToTop from '../components/BackToTop';
import TextMeButton from '../components/TextMeButton';
import Footer from '../common/Footer';
import Title from '../common/Title';
import SubTitle from '../common/SubTitle';
import PreLoader from './../common/PreLoader';
import InquiryForm from '../components/InquiryForm';


const Contact = () => {
    return ( 

        <>
        <Helmet><title>Get In Touch</title>
             <link rel="icon" type="image/png" href="/icon.png" sizes="16x16" />    
        </Helmet>
        <PreLoader/>
          <SideMenu/>
        <ToggleButtons/>

<div className='main-wrapper'>
<Title  title="Let's get in touch" className="maintitle" />
<SubTitle  subtitle="If you're looking for a creative UX/UI Designer
 who blends strategy with design, let's create something meaningful." className="sssub" />
<InquiryForm/>
</div>

        <Footer/>
        <BackToTop/>
        <TextMeButton/>
        </>
     );
}
 
export default Contact;