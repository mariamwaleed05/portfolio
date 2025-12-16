import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Recommended from './pages/Recommened';
import ErrorPage from './pages/ErrorPage';
import Article from './pages/Article';
import Portfolio from './pages/Portfolio';
import WorkExperience from './pages/WorkExperience';
import Test from './pages/Test';
import ServicePage from './pages/ServicePage';
import ProjectDetailsPage from './pages/ProjectDetailsPage'; 
import Footer from './common/Footer';

const RoutingApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/WorkExperience' element={<WorkExperience />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='/Test' element={<Test />} />

        <Route path='/services' element={<Services />} />
        
        <Route path='/services/:serviceType' element={<ServicePage />} /> 
        
        <Route path="/project/:projectId" element={<ProjectDetailsPage />} />  
        
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