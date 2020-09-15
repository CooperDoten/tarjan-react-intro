import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//importing new js on client side
import PictureGallery from './PictureGallery';
import ThingsToLearn from './ThingsToLearn';

// React Component Incantation 
class App extends Component {

  //initial state when app loads
  state = {
    whatDayIsIt: 'Taco Day',
    feeling: 'Happy',
  }

  myAwesomeFunction() {
    console.log('I have state!', this.state);
  }
  render() {

    // access state
    console.log('app state is ', this.state);
    //what this === ... its app
    console.log('this is', this);

    //Awesome function
    this.myAwesomeFunction();
 
    //returning some JSX
    // JSX === Javascript eXtended
    return (
     <div>
       <h1>{this.state.feeling} {this.state.whatDayIsIt}!</h1>
       
       <h3>Things to learn about React:</h3>
       <ThingsToLearn />
       <h3>Check out my picture gallery:</h3>
       <PictureGallery />
     </div>
    );
  }
}

export default App;
