import React, { useEffect, useState } from 'react';
import { supabase } from './../Supabase';

const Footer = () => {
    const [socialLinks, setSocialLinks] = useState([]);

    useEffect(() => {
        const fetchFooterLinks = async () => {
            const { data } = await supabase
                .from('Footer')
                .select('id, Icon, Path, Alt')
                .order('id', { ascending: true });

            if (data) {
                setSocialLinks(data);
            }
        };

        fetchFooterLinks();
    }, []);

    const getHref = (link) => {
        const altText = link.Alt ? link.Alt.toLowerCase() : '';

        if (altText === 'email') {
            return `mailto:${link.Path}`;
        }
        
        if (altText === 'whatsapp') {
            return `https://wa.me/2${link.Path}`; 
        }

        return link.Path;
    };

    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-center">
                    <h2>Let's Create Something Big.</h2>
                    <div className="social-icons">
                        {socialLinks.map((link) => (
                            <a 
                                key={link.id} 
                                href={getHref(link)} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <img src={link.Icon} alt={link.Alt} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;