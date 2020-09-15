import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//importing new js on client side
import PictureGallery from './PictureGallery';

// React Component Incantation 
class App extends Component {
  render() {
    return (
     <div>
       <h1>Happy React Day!</h1>

       <h3>Things to learn about React:</h3>
       <ul>
         <li>HTML inside of JS files</li>
         <li>class App extends Component ?!?!</li>
         <li>render () ?</li>
         <li>import / export ????</li>
       </ul>
       <h3>Check out my picture gallery:</h3>
       <PictureGallery />
     </div>
    );
  }
}

export default App;
