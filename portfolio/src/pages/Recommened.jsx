import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import { supabase } from '../Supabase'; 

import DesignerProfile from '../components/DesignerProfile'; 
import SideMenu from '../common/SideMenu';
import ToggleButtons from '../components/ToggleButtons';
import BackToTop from '../components/BackToTop';
import TextMeButton from '../components/TextMeButton';
import Footer from '../common/Footer';
import PreLoader from './../common/PreLoader';

const Recommended = () => {
    const [designersData, setDesignersData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDesigners = async () => {
            try {
                const { data, error } = await supabase
                    .from('RecommendedBlog') 
                    .select('*')
                    .order('id', { ascending: true }); 

                if (error) throw error;
                setDesignersData(data);
            } catch (error) {
                console.error("Error fetching designers:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDesigners();
    }, []);

    if (loading) return <PreLoader />;

    return (
        <>
            <Helmet>
                <title>Recommended Designers</title>
                <link rel="icon" type="image/png" href="/icon.png" sizes="16x16" />    
            </Helmet>
            
            <SideMenu/>
            <ToggleButtons/>
            
            <div className="main-wrapper">
                <section className="section">
                    <h1 className="maintitle">Recommended</h1>

                    {designersData.length > 0 ? (
                        designersData.map((designer, index) => (
                            <DesignerProfile key={index} designer={designer} />
                        ))
                    ) : (
                        <p style={{color: 'white', textAlign: 'center'}}>No designers found.</p>
                    )}
                </section>
            </div>

            <Footer/>
            <BackToTop/>
            <TextMeButton/>
        </>
    );
}

export default Recommended;