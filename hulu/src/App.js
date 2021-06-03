import { useState } from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Result from './Result';

function App() {

  const[selectedOption, setSelectedOption]=useState("");

  return (
    <div className="app">
        <Header />
        <Nav setSelectedOption={setSelectedOption} />
        <Result selectedOption={selectedOption} />
    </div>
  );
}

export default App;
