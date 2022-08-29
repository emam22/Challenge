import React from 'react';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import Footer from '../footer/footer';
import GitHubContainer from '../Header/Header';
import NavBar from '../NavBar/NavBar';

export const AppRouting = () => {
         
    return (
        <BrowserRouter>
        <NavBar/>
        <Routes>
        <Route path='/' element={<GitHubContainer/>}/>
        <Route path='/user/:data.login' element={<GitHubContainer/>}/>

        </Routes>
        <Footer/>        
        </BrowserRouter>
     );
};