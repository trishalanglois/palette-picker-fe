import React, { Component } from 'react';
import './App.scss';
import Sidebar from '../Sidebar/Sidebar';
import FormContainer from '../FormContainer/FormContainer';

const App  = () => {
  return (
    <div className="App">
      <nav className="sidebar">
        <Sidebar />
      </nav>
      <h1 className="app-title">palette picker</h1>
      <main className="main-container">
        <FormContainer />
      </main>
    </div>
  )
}


export default App;
