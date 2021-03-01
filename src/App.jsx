import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ColorList from './ColorList.jsx';
import AddColorForm from './AddColorForm.jsx';
import GithubUser from './GithubUser.jsx';

function App() {
  return (
    <div className="App">

        <GithubUser login="rajasegar" />
    {/*
      <ColorList />
      <AddColorForm />
      */}

    </div>
  );
}

export default App;
