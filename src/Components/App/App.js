import React, { Component } from 'react';
import './App.scss';
import Sidebar from '../Sidebar/Sidebar';
import FormContainer from '../FormContainer/FormContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <FormContainer />
      </div>
    )
  }
}


export default App;
