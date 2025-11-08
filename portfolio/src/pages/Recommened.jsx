import React from 'react';
import DesignerProfile from '../components/DesignerProfile'; 
import Designer from '../components/Designer'; 
import SideMenu from '../common/SideMenu';
import ToggleButtons from '../components/ToggleButtons';
import BackToTop from '../components/BackToTop';
import TextMeButton from '../components/TextMeButton';
import Footer from '../common/Footer';

const Recommended = () => {
    return (
        <>
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