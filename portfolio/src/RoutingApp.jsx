import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';

const RoutingApp = () => {
    return (
<BrowserRouter>
<Routes>

<Route path='/' element={<Home />} />

<Route path='*' element={<ErrorPage />} />

</Routes>
</BrowserRouter>
     );
}
 
export default RoutingApp;