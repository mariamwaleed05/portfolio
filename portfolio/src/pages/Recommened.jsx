import React from 'react';
import { Helmet } from "react-helmet";

import DesignerProfile from '../components/DesignerProfile'; 
import Designer from '../components/Designer'; 
import SideMenu from '../common/SideMenu';
import ToggleButtons from '../components/ToggleButtons';
import BackToTop from '../components/BackToTop';
import TextMeButton from '../components/TextMeButton';
import Footer from '../common/Footer';
import PreLoader from './../common/PreLoader';

const Recommended = () => {
    return (
        <>
       <Helmet><title>Recommened Designers</title></Helmet>
        <PreLoader/>
        <SideMenu/>
        <ToggleButtons/>
        <div className="main-wrapper">
            <section className="section">
                <h1 className="maintitle">Recommended</h1>

                {Designer.map((Designer, index) => (
                    <DesignerProfile key={index} Designer={Designer} />
                ))}

            </section>
        </div>

            <Footer/>
            <BackToTop/>
            <TextMeButton/>
        </>
    );
}

export default Recommended;