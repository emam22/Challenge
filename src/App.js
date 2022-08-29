import React, { Component } from 'react';
import './App.css';
import GitHubContainer from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Footer from './components/footer/footer';
import NavBar from './components/NavBar/NavBar';

class App extends Component {

  render() {
    return (
      <body className="">
        <NavBar/>
        <div className="container orange lighten-2">
          <GitHubContainer/>
        </div>
        <Footer/>
      </body>
    );
  }
}

export default App;
