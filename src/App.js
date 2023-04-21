import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import Home from './components/Home';
import { useState } from 'react';

function App() {

  const [activeComponent, setActiveComponent] = useState(<Home key={'home'}/>)
  function handleComponent(component){
    setActiveComponent(component)
  }

  return (
    <div className="container" id="app">
      <Menu activeComponent={activeComponent} handleComponent={handleComponent}/>
      {activeComponent}
    </div>
  );
}

export default App;