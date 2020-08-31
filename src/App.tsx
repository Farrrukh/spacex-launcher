import React from 'react';
import './App.css';
import MissionContainer from './components/Mission/index'
import MissionInfo from './components/MissionInfo/index'

function App() {
  return (
    <div className="app-container">
      <MissionContainer></MissionContainer>
      <MissionInfo/>
    </div>
  );
}

export default App;
