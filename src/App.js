import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Counter from './components/Counter';

const App = () => {
  return (
    <>
      <Counter step={2} />
    </>
  );
};

export default App;
