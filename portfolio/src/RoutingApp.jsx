import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Recommended from './pages/Recommened';
import ErrorPage from './pages/ErrorPage';
import Footer from './common/Footer';
import Ux from './pages/Ux';
import GraphicDesign from './pages/GraphicDesign';
import ContentCreation from './pages/ContentCreation';
import WebDevelopment from './pages/WebDevelopment';
import Photography from './pages/Photography';
import MotionGraphics from './pages/MotionGraphics';
import Modeling from './pages/Modeling';
import Lanyard from './components/Lanyard';
import Article from './pages/Article';
import Portfolio from './pages/Portfolio';
import WorkExperience from './pages/WorkExperience';
import ServiceProjects from './components/ServiceProjects';
import ProjectDetailsPage from './pages/ProjectDetailsPage';

const RoutingApp = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home />} />
       
        <Route path='/about' element={<About />} />
        <Route path='/WorkExperience' element={<WorkExperience />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/footer' element={<Footer />} />

        <Route path='/Lanyard' element={<Lanyard />} />

        <Route path='/services' element={<Services />} />
        <Route path='/ServiceProjects' element={<ServiceProjects />} />
        <Route path="/project/:projectId" element={<ProjectDetailsPage />} />   
        <Route path='/Ux' element={<Ux />} />
        <Route path='/GraphicDesign' element={<GraphicDesign />} />
        <Route path='/ContentCreation' element={<ContentCreation />} />
        <Route path='/WebDevelopment' element={<WebDevelopment />} />
        <Route path='/Photography' element={<Photography />} />
        <Route path='/Modeling' element={<Modeling />} />
        <Route path='/MotionGraphics' element={<MotionGraphics />} />

        <Route path="/Blog" element={<Blog />} />
        <Route path="/Recommended" element={<Recommended />} />
        <Route path='/Article' element={<Article />} />
        <Route path='/Portfolio' element={<Portfolio />} />

        <Route path='*' element={<ErrorPage />} />

      </Routes>
    </BrowserRouter>
  );
};

export default RoutingApp;