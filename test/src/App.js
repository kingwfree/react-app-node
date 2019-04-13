import React, { Component } from 'react';
import Head from './component/head/index'
import './static/css/app.css'
import pic from './static/img/1.png'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Head />
        <img src={pic} alt=""/>
        <img src={require('./static/img/1.png')} alt="dog" />
      </div>
    );
  }
}

export default App;
