import React from 'react';
import SlotMachine from './components/SlotMachine';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1 className="rainbow-title">🍊 Fruity and Friend</h1>
      <SlotMachine />
    </div>
  );
};

export default App;
