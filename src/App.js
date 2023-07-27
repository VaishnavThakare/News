import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
// import NewsItems from './Components/NewsItems';

export default class App extends Component {
 
  render() {
    return (
      <div>
       <Navbar/>
        <News pageSize={4}/>
      </div>
    )
  }
}

