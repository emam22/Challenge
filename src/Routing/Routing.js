import React from 'react';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import GitHubContainer from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Footer from './components/footer/footer';
import NavBar from './components/NavBar/NavBar';

export const AppRouting = () => {
         
    return (
        <BrowserRouter>
            <Navbar/>
            <SearchBar/>
            <Routes>
                <Route path='/' element={<GitHubContainer/>}/>
            <Routes/>
            <Footer/> 
        <BrowserRouter/>
    );
};
        