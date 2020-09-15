import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//importing new js on client side
import PictureGallery from './PictureGallery';
import ThingsToLearn from './ThingsToLearn';

// React Component Incantation 
class App extends Component {
  render() {
    //returning some JSX
    // JSX === Javascript eXtended
    return (
     <div>
       <h1>Happy React Day!</h1>
       
       <h3>Things to learn about React:</h3>
       <ThingsToLearn />
       <h3>Check out my picture gallery:</h3>
       <PictureGallery />
     </div>
    );
  }
}

export default App;
