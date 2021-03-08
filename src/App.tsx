import React from 'react';
import CustomCard from './components/custom-card/custom-card';
import HorizontalLinearStepper from './components/horizontal-line-stepper/HorizontalLinearStepper';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="cards">
      <CustomCard/>
      <CustomCard/>
      <CustomCard/>
      </div>
      
      <div className="stepper">
      <HorizontalLinearStepper/>
      </div>

    </div>
  );
}

export default App;


