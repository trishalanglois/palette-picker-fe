import React, { Component } from 'react';
import './App.scss';
import Sidebar from '../Sidebar/Sidebar';
import FormContainer from '../FormContainer/FormContainer';

const App  = () => {
  return (
    <div className="App">
      <Sidebar />
      <FormContainer />
    </div>
  )
}


export default App;
